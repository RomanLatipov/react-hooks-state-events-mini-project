import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tempTasks, setTasks] = useState(TASKS);
  function changeTasks(category) {
    console.log("called");
    if (category === "All")
      setTasks(TASKS)
    else
      setTasks(TASKS.filter((task) => task.category === category));
  }
  function onTaskFormSubmit(event, text, category) {
    event.preventDefault();
    setTasks([...tempTasks, {text: text, category: category}]);
  }
  console.log(tempTasks);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeTasks={changeTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tempTasks}/>
    </div>
  );
}

export default App;
