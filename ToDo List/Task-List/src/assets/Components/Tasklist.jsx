import React from "react"
import "./TaskList.css"

function TaskList(props){
    return (
    <>
    <li>{props.item}</li>
    <br />
    </>
    )
}
export default TaskList