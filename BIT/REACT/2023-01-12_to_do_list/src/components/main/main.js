import {useState} from 'react';

// //bi bi-check2-circle - done check

const Main = () =>{
    const [task, setTask] = useState([]);
    const [formValue, setFormValue] = useState();

    const handleForm = (e) => {
        e.preventDefault();
        setTask([...task, {name: formValue, status: false}]);

    }

    const handleDone = (e, index) => {
        if (task[index].status===false){
            task[index].status=true;
        }else{
            task[index].status=false;
        }
        setTask([...task]);
    }

    const handleChange = (e, index) => {
        let taskName=task[index].name;
        e.target.previousElementSibling.outerHTML=`
            <input type='text' value=${taskName} onChange=${setFormValue} />`;
    }

    const handleDelete = (index) => {
        task.splice(index,1);
        console.log(task)
        setTask([...task]);
    }



    return (
        <>
            <form className="input-group" onSubmit={handleForm}>
                <label className="input-group-text">Add To Do Item:</label>
                <input className=" form-control" type="text" onChange={(e)=>setFormValue(e.target.value)} />
                <button className="input-group-text">
                    <i className="bi bi-plus-circle"></i>
                </button>
            </form>
            <ul>
             {task.map((value, index) => {
                return (
                    <li key={index} className="border border-success rounded bg-success  bg-opacity-10">
                        <i  className={task[index].status===false? "fw-bold bi bi-circle text-dark" : "fw-bold bi bi-check2-circle text-success"} onClick={(e) =>handleDone(e, index)}>
                        </i> 
                        <span className={(task[index].status===true) ? "text-success text-decoration-line-through" : ""}>
                            {value.name}
                        </span>
                        <i className="bi bi-pen" onClick={(e) => handleChange(e, index)}></i>
                        <i className="bi bi-trash text-danger" onClick={() => handleDelete(index)}></i>
                    </li>)
                })
             }
            </ul>
        </>
    )
}
export default Main;


