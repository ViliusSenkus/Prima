import style from './list.module.css';
import {useEffect, useState } from "react";
import Edit from './Edit';

const List = ({list, setList}) =>{
    
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
    
    const [child,setchild] = useState()
    return (
            <div className={style.container}>
                <div className={list.length >0 ? style.hidden : style.block}>Shopping cart is Empty</div>
                {list.map((value, index) => {
                            return  <div key={index}>
                                    <div  className={style.item}>
                                        <div>
                                            <div className={style.number}>{index+1}.</div>
                                            <div className={style.name}>{value.name}</div>
                                        </div>
                                        <div>
                                            <div className={style.quantity}>{value.quantity}</div>
                                        </div>
                                        <div>
                                            <button onClick={()=>{setchild(index) }}>
                                                Change</button>
                                            <button onClick={()=>{del(index)}}>Delete</button>
                                        </div>
                                    </div>
                                    <Edit qnt={value.quantity} itm={value.name} list={list} setList={setList} index={index} child={child}/>
                                    </div>}
                            )}
            </div>
            )
    }

export default List;