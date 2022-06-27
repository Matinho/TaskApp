import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={HandleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(event) => {
            setNewTaskName(event.target.value);
          }}
          className="form-control "
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm" type="submit">
          Save Task
        </button>
      </div>
    </form>
  );
};

export default TaskCreator
