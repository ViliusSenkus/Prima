import {useState} from 'react';

const AddVAT = (props) => {    
    const options=props.vatSize.map((value, index)=> <option key={index} value={value}>{value}</option>);

        
    const [vat, setVAT] = useState (21);
    const [price, setPrice] = useState (100);

    const TotalPrice = () => {
        return(
            <div>
                <div>Kaina su PVM:</div>
                <div>
                    {price+((price*vat)/100)}
                </div>
            </div>
        )
    }

    const AddedVAT =() => {
        return (
            <div>
            <div>Pridėtas PVM:</div>
            <div>
                {(price*vat)/100}
            </div>
        </div>
        )
    }

    const Results =() =>{
        return (
            <div>
                <AddedVAT />
                <TotalPrice />
            </div>
        );

    }
 
    return (
        <div>
            <form>
                <input type="number" onChange={(e)=>setPrice(Number(e.target.value))} />
                <select onChange={(e)=> setVAT(Number(e.target.value))}>
                    {options}
                </select>
            </form>
            <Results />
        </div>
    )
}

export default AddVAT;