import style from './input.module.css';

const Input = ({quantity, setquantity, item, setItem, list, setList}) => {



    const handleSubmit = (e) =>{
        let data;
        e.preventDefault();
        data=[...list,{name:item, quantity:quantity}];
        setList(data);
        localStorage.setItem('list', JSON.stringify(data));
        e.target.reset();
    }

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