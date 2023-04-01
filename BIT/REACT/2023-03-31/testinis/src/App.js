import './App.css';
import { useState, useEffect } from 'react';
import Komponentas from './Komponentas';


function App() {
  
  console.log("App.js-pati pradzia" )

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log("App.js-EFECTO pradzia - " + counter)
    let a=counter;
    setCounter(a++);
    setTimeout(()=>{
      setCounter(a)
    }, 3000);
    console.log("App.js-EFECTO galas - " + counter)
  },[]);

  return (  
    <div>
       {console.log("App.js-returno pradzia - " + counter )}  
      App.js
      {counter}
      <Komponentas counteris={counter} setCounter={setCounter}/>
      {console.log("App.js-returno galas - " + counter )}  
    </div>
  );
}

export default App;
