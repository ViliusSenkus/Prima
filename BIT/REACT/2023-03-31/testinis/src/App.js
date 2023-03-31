import './App.css';
import { useState, useEffect } from 'react';
import Komponentas from './Komponentas';


function App() {
  // setCounter(counter++);
  
  console.log("App.js-pati pradzia" )

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log("App.js-EFECTO pradzia - " + counter)
    // let a=counter++;
    // setCounter();
    setTimeout(()=>{
      setCounter(5)
    }, 2000);
  },[]);

  return (  
    <div>
       {console.log("App.js-returno pradzia - " + counter )}  
      App.js
      {counter}
      <Komponentas />
      g
    </div>
  );
}

export default App;
