import style from './list.module.css';
import {useEffect, useState } from "react";
import Edit from './Edit';

const List = ({list, setList, setItem, setquantity}) =>{

    const [change, setChange] = useState(false)
    const [show, setShow] = useState("")

    useEffect( () => {
        const data = localStorage.getItem('list');
        if(data!==null) setList(JSON.parse(data));
    }, [])

    const del = (index) =>{
        list.splice(index, 1);
        let data=[...list];
        setList(data);
        localStorage.setItem('list', JSON.stringify(data));
    }

    const edit = (index) =>{
        // for (let i=0; i<list.length; i++){
        //     if (Edit.className===index + " "+{change}+" "+{show}) console.log(index, 'radau')
        // }
        // setChange(true)
    }

    // useEffect (()=>{
    //     if (show)
    // },[change])
    

    return (
            <div className={style.container}>
                <div className={list.length >0 ? style.hidden : style.empty}>Shopping cart is Empty</div>
                {list.map((value, index) => {
                            return  <div key={index}>
                                        <div  className={style.item}>
                                            <div>
                                                <div className={style.number}>{index+1}.</div>
                                                <div className={style.name}>{value.name}</div>
                                            </div>
                                            <div>
                                                <div className={style.quantity}>
                                                    {value.quantity}
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={()=>{edit(index)}}>
                                                    Change</button>
                                                <button onClick={()=>{del(index)}}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        {change &&  <Edit className={index} qnt={value.quantity} itm={value.name} list={list} setList={setList} index={index} setItem={setItem} setquantity={setquantity} change={change}/> }
                                    </div>}
                )}
            </div>
           )
}

export default List;