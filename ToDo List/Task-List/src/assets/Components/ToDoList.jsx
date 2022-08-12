import React from "react";
import "./ToDo.css";
function ShowToDoList(props) {
  // function deleteToDo(){
  //     console.log("LN06", props.taskUniqueId);
  // }
  return (
    <div className="single-task">
      <div key={props.uniqueId} className="printlistdata">
        {props.item}
      </div>
      <button id="delete-btn" onClick={() => props.deleteToDo(props.uniqueId)}>
        Delete
      </button>
    </div>
  );
}
export default ShowToDoList;
