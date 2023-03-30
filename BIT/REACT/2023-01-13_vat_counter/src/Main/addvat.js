import {useState} from 'react';

const AddVAT = (props) => {    
    const options=props.vatSize.map((value, index)=> <option key={index} value={value}>{value}</option>);

        
    const [vat, setVAT] = useState (21);
    const [price, setPrice] = useState (100);

    const TotalPrice = () => {
        return(
            <div className='row'>
                <div className="label">
                    Kaina su PVM:
                </div>
                <div className='box'>
                    {price+((price*vat)/100)}
                </div>
            </div>
        )
    }

    const AddedVAT =() => {
        return (
            <div className='row'>
                <div className="label">
                    Pridėtas PVM:
                </div>
                <div className='box'>
                    {(price*vat)/100}
                </div>
            </div>
        )
    }

    const Results =() =>{
        return (
            <div className="result">
                <AddedVAT />
                <TotalPrice />
            </div>
        );

    }
 
    return (
        <div className="vat">
            <form>
                <div className='row'>
                    <div className="label">
                        Kaina be PVM
                    </div>
                    <input type="number" onChange={(e)=>setPrice(Number(e.target.value))} defaultValue='100'/>
                </div>
                <div className='row'>
                    <div className="label">
                        PVM tarifas:
                    </div>
                    <select onChange={(e)=> setVAT(Number(e.target.value))}>
                        {options}
                    </select>
                </div>
            </form>
            <Results />
        </div>
    )
}

export default AddVAT;