import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const API='https://api.adviceslip.com/advice';
  const [data, setData] = useState({});           //atskiras įrašas
  const [dataList, setDataList] = useState([]);   //sąrašas rodytų įrašų

  useEffect ( () => {
    fetch(API)
    .then((res) => res.json())
    .then((res) => {setData(res.slip)})
    if(localStorage.getItem('advices')!==null){
        setDataList(JSON.parse(localStorage.getItem('advices')));
        console.log(dataList);
        }
  }, [])

  const handleButton = (e) => {            //f-ja pasileidžia mygtuko paspaudimu
    e.preventDefault();
    // let tmp=[...dataList,{id:data.id, name:data.advice, count:0}];
    // setDataList(tmp);
    if (localStorage.getItem('advices')===null){    //pridedama pirma reikšmė
      localStorage.setItem('advices', JSON.stringify([{id:data.id, name:data.advice, count:0}]))
    } else{
      const temp=JSON.parse(localStorage.getItem('advices')); //temp priima reiksmes is saugyklos
      let n=0;                                 //reikalinga pasikarotjimų iškėlimui iš for ir if
      for (let x of temp){
          // let count=x.count;
          if (x.id === data.id){
           x.count++;
          //  x.count=count;
           n=x.count;
          //  console.log(count)
          }
      }
      if (n === 0){
        temp=[...dataList,{id:data.id, name:data.advice, count:0}];
        setDataList(temp);
        localStorage.setItem('advices', JSON.stringify(dataList));
      }else{            //esant atitikimų, pirmiausiai juose perduodame į dataList.
        dataList=[...temp];
        setDataList(dataList);
        localStorage.setItem('advices', JSON.stringify(dataList));
      }
    }
    fetch(API)
    .then((res) => res.json())
    .then((res) => {setData(res.slip)})
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
              {dataList.length > 0 && dataList.map((value, index) => {
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
