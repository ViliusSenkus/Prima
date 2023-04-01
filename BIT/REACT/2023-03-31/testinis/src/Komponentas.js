import { useEffect } from "react";

function Komponentas(props){

      console.log("componentas");

      useEffect(()=>{
            console.log("K-E " + props.counteris)
      },[])

      

      const handleClick=()=>{
            let a=props.counteris;
            a++;
            props.setCounter(a);
            console.log("Komponeneto F-ja" + a)
      }

      return(
            <div>
            Kitas komponentas
                  <div>
                        <button onClick={handleClick}>Click Me</button>
                  </div>
                  {console.log("K-Return " + props.counteris)}
            </div>
      )
}

export default Komponentas