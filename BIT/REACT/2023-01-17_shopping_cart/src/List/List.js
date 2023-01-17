import style from './list.module.css';
import { useId, useEffect } from "react";


const List = () =>{

    let list=localStorage.getItem('list');
    list=JSON.parse(list);
    console.log(list);
    
    const unique=useId();
    useEffect(()=>{console.log('atnaujintas listas')}, [list])

    return (
            <div className={style.container}>
                rezultatas {list.map((value, index) => {

                return(
                    <div key={index}>
                        {value.name}{value.quantity}
                    </div>)})}
            </div>
            )
    }

export default List;