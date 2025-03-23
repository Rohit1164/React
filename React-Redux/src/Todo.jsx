import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, fetchtask } from "./store";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleformSubmit = (e) => {
    e.preventDefault();
    return dispatch(addTask(task));
  };

  const handledeleteTask = (index) => {
    return dispatch(deleteTask(index));
  };
  const handlefetchTask = () => {
    return dispatch(fetchtask());
  };

  return (
    <div className="contianer">
      <div>
        <h1>To-do List</h1>
      </div>
      <div className=".todo-container">
        <form onSubmit={handleformSubmit}>
          <input
            type="text"
            placeholder=" Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button>Add task</button>
          <button onClick={handlefetchTask}>Fetch Taskk</button>
        </form>
      </div>
      <div>
        <ul>
          {tasks.map((currdata, index) => (
            <li key={index}>
              <p>
                {index}: {currdata}
              </p>

              <MdDelete
                className="delete-icon"
                onClick={() => handledeleteTask(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
