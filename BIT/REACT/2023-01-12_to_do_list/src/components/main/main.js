import {useState} from 'react';

// //bi bi-check2-circle - done check

const Main = () =>{
    
    const [input, setInput] = useState();
    const [tasks, setTask] = useState([]);
    // const [value, setValue] = useState();

    const handleForm = (e) => {
        e.preventDefault();
        setTask([...tasks, {name: input, status: false}]);
    }

    const handleDone = (e, index) => {
        if (tasks[index].status===false){
            tasks[index].status=true;
        }else{
            tasks[index].status=false;
        }
        setTask([...tasks]);
    }

    const handleDelete = (index) => {
        tasks.splice(index,1);
        setTask([...tasks]);
    }

    const handleChange = (index) => {
        tasks[index].name=window.prompt("Pakeiskite užduotį", tasks[index].name);
        setTask([...tasks]);
    }



    return (
        <>
            <form className="input-group" onSubmit={handleForm}>
                <label className="input-group-text">Add To Do Item:</label>
                <input className=" form-control" type="text" onChange={(e)=>setInput(e.target.value)} />
                <button className="input-group-text">
                    <i className="bi bi-plus-circle"></i>
                </button>
            </form>
            <ul>
             {tasks.map((value, index) => {
                return (
                    <li key={index} className="border border-success rounded bg-success  bg-opacity-10">
                        <i  className={tasks[index].status===false? "fw-bold bi bi-circle text-dark" : "fw-bold bi bi-check2-circle text-success"} onClick={(e) =>handleDone(e, index)}>
                        </i> 
                        <span className={(tasks[index].status===true) ? "text-success text-decoration-line-through" : ""}>
                            {value.name}
                        </span>
                        <i className="bi bi-pen" onClick={(e) => handleChange(index)}></i>
                        <i className="bi bi-trash text-danger" onClick={() => handleDelete(index)}></i>
                    </li>)
                })
             }
            </ul>
        </>
    )
}
export default Main;


