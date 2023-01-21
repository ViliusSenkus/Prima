import { useEffect, useState } from "react";

const History = ({renew}) => {

const [list, setList] = useState()

useEffect (()=>{
      const array=JSON.parse(localStorage.getItem('passwords'));
      if (array.length > 0){
            setList(array.map((value, index) =>{return (<li key={index} className="list-group-item">{value}</li>)})
                  )
      }else{
            setList(<div>There is no Generated Passwords in a memory</div>)
      }

},[renew])

      return(
            <div>
                  <ul className="list-group list-group-flush">
                  {list}
                  </ul>
            </div>
      )
}

export default History;