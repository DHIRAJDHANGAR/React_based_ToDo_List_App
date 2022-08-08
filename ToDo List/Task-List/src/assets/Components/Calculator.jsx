import { useState } from "react";
import "./Calculator.css";
import TaskList from "./Tasklist"

function Calculator() {
  const [inputItem, setInputItem] = useState("");
  const [taskList, setTaskList] = useState([]);

function itemvalue(e){
    setInputItem(e.target.value)
}

function listOfTask(){
    setTaskList([...taskList, inputItem]);
    setInputItem("");
}

  return (
    <div className="main-container">
      <div className="list-main-container">
        <h1 className="head">ToDo List</h1>
        <div className="input-text-with-btn">
          <input onChange={itemvalue} type="text" value={inputItem} placeholder="Create task here..." />
          <button onClick={listOfTask}>Add</button>
           <br />      
        </div>
          <ol>
          {taskList.map((taskListItem)=>{
            return <TaskList item={taskListItem}/>
          })}
          </ol>
      </div>
    </div>
  );
}

export default Calculator;
