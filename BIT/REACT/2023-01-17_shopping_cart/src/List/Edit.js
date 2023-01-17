import style from './list.module.css';
import { useState } from 'react';

const Edit = ({qnt, itm, list, setList, index, child}) => {

    const [onOff, setOnOff] = useState(false);

    const change = (e) =>{
        let data;
        e.preventDefault();
        list[index]={name:itm, quantity:qnt};
        data=[...list]
        setList(data)
        localStorage.setItem('list', JSON.stringify(data));
        setOnOff=(false);
    }
    return  <div id={child} className={ !onOff ? style.edit : style.hidden} key={index}>
                <form onSubmit={() => {
                    setOnOff=false;
                    change() }}
                >
                    <div>
                        <div className={style.editNumber}> </div>
                        <input type="text" className={style.editInputName} value={itm}
                                onChange={(e)=>{itm=e.target.value}} />
                    </div>
                    <div>
                        <input type="number" className={style.editInputQnt} value={qnt}
                                 onChange={(e)=>{itm=e.target.value}} />
                    </div>
                    <div>
                        <button>Confirm</button>
                    </div>
                </form>
            </div>
}

export default Edit;