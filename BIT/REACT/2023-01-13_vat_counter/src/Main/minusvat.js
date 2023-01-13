import {useState} from 'react';

const MinusVAT = (props) => {    
    const options=props.vatSize.map((value, index)=> <option key={index} value={value}>{value}</option>);

        
    const [vat, setVAT] = useState (21);
    const [price, setPrice] = useState (100);

    const DeductedVAT = () => {
        return(
            <div>
                <div>Išskaičiuotas PVM:</div>
                <div>
                    {(price*vat)/100}
                </div>
            </div>
        )
    }

    const LeftPrice =() => {
        return (
            <div>
            <div>Kaina be PVM:</div>
            <div>
                {price-((price*vat)/100)}
            </div>
        </div>
        )
    }

    const Results =() =>{
        return (
            <div>
                <DeductedVAT />
                <LeftPrice />
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

export default MinusVAT;