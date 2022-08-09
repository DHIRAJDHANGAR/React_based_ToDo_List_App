import React from "react"
import "./ToDoList.css"

function ShowToDoList(props){
    // function deleteToDo(){
    //     console.log("LN06", props.taskUniqueId);
    // }
    return (
    <div className="single-task">
    <li key={props.uniqueId}>{props.item}</li>
    <button id="delete-btn" onClick={()=>props.deleteToDo(props.uniqueId)}>Delete</button><br />    
    </div>
    )
}
export default ShowToDoList