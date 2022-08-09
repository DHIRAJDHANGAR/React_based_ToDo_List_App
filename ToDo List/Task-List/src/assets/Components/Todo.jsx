import { useState } from "react";
import "./ToDo.css";
import ShowToDoList from "./ToDoList"

function MyToDo() {
  const [newTodo, setnewTodo] = useState("");  // For containing new task
  const [taskList, setTaskList] = useState([]);  // For containing entire tasks in single array

function _handleNewToDo(e){
    setnewTodo(e.target.value)
}

function _handleAddToDo(){
  let taskObj={
    id: new Date().getTime(),
    content: newTodo,
  }
    setTaskList([...taskList, taskObj]);
    setnewTodo("");
}

function _handleDeleteToDo(id){
  console.log("LN23", id);
  let oldList = [...taskList];
  console.log("LN25", oldList)
  let newList = oldList.filter((elem)=>{
    return elem.id !== id;
  })
  setTaskList([...newList])
  console.log("LN31", newList)
}

  return (
    <div className="main-container">
      <div className="list-main-container">
        <h1 className="head">ToDo List</h1>
        <div className="input-text-with-btn">
          <input onChange={_handleNewToDo} type="text" value={newTodo} placeholder="Create task here..." />
          <button onClick={_handleAddToDo}>Add</button>
           <br />      
        </div>
          <ol>
          {taskList.map((toDoItem)=>{
            return <ShowToDoList uniqueId={toDoItem.id} item={toDoItem.content} deleteToDo={_handleDeleteToDo}/>
          })}
          </ol>
      </div>
    </div>
  );
}

export default MyToDo;
