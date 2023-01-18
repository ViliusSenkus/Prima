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
    .then((res) => {setData(res.slip)});
    if(localStorage.getItem('advices')!==null) setDataList(JSON.parse(localStorage.getItem('advices')));
  }, [])
  
  
  useEffect (()=>{
    let x=0;
    for (let i=0; i<dataList.length; i++){                   
        if (dataList[i].id === data.id){ 
            let n=dataList[i].count;
            n++;
            dataList[i].count=x=n;
        }
    } 
      let tmp=[...dataList,{name:data.advice, count: 0, id:data.id}];
      setDataList(tmp);
      localStorage.setItem('advices', JSON.stringify({name:data.advice, count: 0, id:data.id}));
      fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res.slip));
  },[push])


  const handleButton = () => {       
      setPush(!push);
  }
  
  return (
    <div className="container">
      <h1>Advice of the Day</h1>
      <div>{data.advice}</div>
      <button onClick={handleButton}>Give me one more Advice</button>
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
              {dataList.map((value, index) => {
                  return (<tr key={index}>
                            <td>{index+1}.</td>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.count}</td>
                          </tr>)
                })
              }
            </tbody>
          </table>
      </div>
    </div>
    
  );
}

export default App;
