import style from './list.module.css';
import { useState } from 'react';

const Edit = ({qnt, itm, list, setList, index, setItem, setquantity,chage}) => {

    const [editItem, setEditItem] = useState();
    const [editQnt, setEditQnt] = useState();


    setEditItem(itm);
    setEditQnt(qnt);

    const change = (e) =>{
        let data;
        e.preventDefault();
        // list[index]={name:setItem(editItem), quantity:setquantity(editQnt)};
        // data=[...list]
        // setList(data)
        // localStorage.setItem('list', JSON.stringify(data));
        change=false;
    }
    return  <div id={index} className={style.item}>
                <form onSubmit={() => {change()}}>
                    <div>
                        <div className={style.editNumber}> </div>
                        <input type="text" className={style.editInputName} value={editItem}
                                onChange={(e)=>{setEditItem(e.target.value)}} />
                    </div>
                    <div>
                        <input type="number" className={style.editInputQnt} value={editQnt}
                                 onChange={(e)=>{setEditQnt(e.target.value)}} />
                    </div>
                    <div>
                        <button>Confirm</button>
                    </div>
                </form>
            </div>
}

export default Edit;