import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const API='https://api.adviceslip.com/advice';

  const [data, setData] = useState({});
  const [dataList, setDataList] = useState([]);
  const [push, setPush] = useState(true);

  useEffect ( () => {

    fetch(API)
    .then((res) => res.json())
    .then((res) => {
        setData(res.slip); 
        
        const toStorage = (object) => localStorage.setItem('advices', JSON.stringify(object));
        const fromStorage = () =>  JSON.parse(localStorage.getItem('advices'));
        
        if(localStorage.getItem('advices')!=null){
            let array = fromStorage();
            let repeated = false;
            
            if ( array.length > 14 ){
              localStorage.removeItem('advices')
              array.splice(0,1);
            }

            array.filter(value => {
                if (value.id===res.slip.id){
                    value.count++;
                    repeated=true;
                }
            })

            if ( repeated === false ) {
                array.push({ id:res.slip.id, name:res.slip.advice, count:0 });
                toStorage(array);
            }else{
              toStorage(array);
            }

        }else{
            toStorage([{ id:res.slip.id, name:res.slip.advice, count:0 }]);
        }

        
        setDataList(fromStorage());
    });
  },[push])
  
  return (
    <div className="container">
      <h1>Advice of the Day</h1>
      <div>{data.advice}</div>
      <button onClick={()=>setPush(!push)}>Give me one more Advice</button>
      <div>
        <h3>List of Advices recieved</h3>
          <table>
            <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>ID</th>
                  <th>Advice</th>
                  <th>Times showen</th>
                </tr>
            </thead>
            <tbody>
              {dataList?.map((value, index) => <tr key={index}>
                                                  <td>{index+1}.</td>
                                                  <td>{value.id}</td>
                                                  <td>{value.name}</td>
                                                  <td>{value.count}</td>
                                                </tr>)
              }
            </tbody>
          </table>
      </div>
      <div>
        <h3>Note:</h3>
        <div>All viewed advice data is stored on your computer. To save computer resources and avoid crashes, the list will show the last 14/15 unique unrepeated items. Number of items depend on newly recieved advice.</div>
      </div>
    </div>
    
  );
}

export default App;


