import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  return (
    <form className="new-task-form" onSubmit={event => {onTaskFormSubmit(event, "bbq", "food")}}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
