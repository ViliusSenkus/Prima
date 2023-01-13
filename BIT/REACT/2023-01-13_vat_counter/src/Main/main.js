import MinusVAT from './minusvat';
import AddVAT from './addvat';

const Reduct = () =>{

    const fullPrice = 0;
    const vatSize = [21, 9, 5];

    return (
        <div>
             <h4>PVM Išskaičiavimas</h4>
             <MinusVAT fullPrice={fullPrice} vatSize={vatSize} />
             <h4> PVM Pridėjimas</h4>
             <AddVAT fullPrice={fullPrice} vatSize={vatSize} />
        </div>
    )
}

export default Reduct;