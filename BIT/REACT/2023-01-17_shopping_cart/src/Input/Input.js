import style from './input.module.css';
import {useState, useEffect} from 'react';

const Input = () => {

    const [quantity, setquantity] = useState(0);
    const [item, setItem] = useState('Add Item');
    const [list, setList] = useState([]);
    // const [storage, setStorage] = useState();

let data;

    const handleSubmit = (e) =>{
        e.preventDefault();
        data=[...list,{name:item, quantity:quantity}];
        setList(data);
    }

    useEffect(()=>{ 
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Item</label>
                    <input type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}/>
                </div>
                <div>
                    <label>Ammount</label>
                    <input type="number" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}/>
                </div>
                <button>Add to List</button>
            </form>
        </div>
    )
}

export default Input;