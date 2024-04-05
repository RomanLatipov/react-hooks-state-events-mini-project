import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  let id = 0;
  return (
    <div className="tasks">
      {/* {console.log(document.getElementsByClassName("tasks"))/*.innerHTML = ""*/}
      {/* display a list of tasks using Task component */}
      {tasks.map(task => <Task id={id++} text={task.text} category={task.category}/>)}
    </div>
  );
}

export default TaskList;
