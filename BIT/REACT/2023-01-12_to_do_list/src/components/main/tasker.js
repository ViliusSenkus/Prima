import {useState} from "react";

import Sidebar from './sidebar';
// import Status from './TaskerComponents';
// import Edit from './TaskerComponents';
// import Task from './TaskerComponents';
// import Delete from './TaskerComponents';

import Style from './tasker.module.css';


// const (state, setState) = useState();
// const (edit, setEdit) = useState();
// const (delete, setDelete) = useState();


// const [{name: task, status: false}, ] = useState([]);

const Tasker = () => {
    
    const [newTask, setNewTask] = useState();
    const [tasksList, setTasksList] = useState([]);

    const handleTask = (e) =>{
        e.preventDefault();
        setTasksList([...tasksList, {id:'1', name:newTask, state: " "}]);
    }

    const handleState = (value, index) => {
        console.log(value, index);
        // props.state===" " ? "done" : " " 
    }

    const CheckMark = (props) => {
        console.log(props);
        return <div onClick={handleState}>
                    Satus icon
                </div>}
    
    return (
        <>
            <form onSubmit={handleTask}>
                <label>Task to do:</label>
                <input type="text" onChange = {(e) => {setNewTask(e.target.value)} }/>
                <button>Add to the List</button>
            </form>
            
            {tasksList.map((element, index) => {
                let task=tasksList[index];
                return <article key={index} className={Style.article}>
                            <CheckMark id={task.id} status={task.state} name={task.name} className={task.state}/>
                            <div className={tasksList[index].name}>Edit icon</div>
                            <div>{element.name}</div>
                            <div>Delete icon</div>   
                        </article>})
            }
            <Sidebar className="hidden" />
            <div className="taskContainer">
                {/* <Status />
                <Edit />
                <Task />
                <Delete /> */}
            </div>
        </>
        
    )
}

export default Tasker;