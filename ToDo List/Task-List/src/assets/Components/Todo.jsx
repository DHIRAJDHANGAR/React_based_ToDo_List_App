import { useState } from "react";
import "./ToDo.css";
import ShowToDoList from "./ToDoList";

function MyToDo() {
  const [newTodo, setnewTodo] = useState(""); // For containing new task
  const [taskList, setTaskList] = useState([]); // For containing entire tasks in single array
  //add todo in input text
  function _handleNewToDo(e) {
    setnewTodo(e.target.value);
  }
  //add todo in list
  function _handleAddToDo() {
    let taskObj = {
      id: new Date().getTime(),
      content: newTodo,
    };
    //check the contend is fill or not
    if (taskObj.content == "") {
      return alert("Enter content");
    }
    setTaskList([...taskList, taskObj]);
    setnewTodo("");
  }
  //delete the todo item
  function _handleDeleteToDo(id) {
    console.log("LN23", id);
    let oldList = [...taskList];
    console.log("LN25", oldList);
    //confirm to delete todo item
    const result = confirm("Are you sure to delete this Todo?");
    if (result) {
      let newList = oldList.filter((elem) => {
        return elem.id !== id;
      });
      setTaskList([...newList]);
      console.log("LN31", newList);
    }
  }
  return (
    <div className="main-container">
      <div className="list-main-container">
        <div className="head">ToDo List</div>
        <div className="input-text-with-btn">
          <input
            onChange={_handleNewToDo}
            type="text"
            value={newTodo}
            placeholder="Create task here..."
          />
          <button className="saveBtn" onClick={_handleAddToDo}>
            Save
          </button>
        </div>
        <div className="parent-container-list">
          {taskList.map((toDoItem) => {
            return (
              <ShowToDoList
                uniqueId={toDoItem.id}
                item={toDoItem.content}
                deleteToDo={_handleDeleteToDo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyToDo;
