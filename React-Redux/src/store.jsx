import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { thunk } from "redux-thunk";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

const intialState = {
  task: [],
};

const taskReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const deleteTask = state.task.filter((curtask, index) => {
        return index !== action.payload;
      });
      return { ...state, task: deleteTask };

    case FETCH_TASK:
      return { ...state, task: [...state.task, ...action.payload] };

    default:
      return state;
  }
};

export const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const fetchtask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const task = await res.json();
      console.log(task);
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (error) {}
  };
};

store.dispatch(addTask("Buy Laptop"));
store.dispatch(addTask("Buy Mobile"));
store.dispatch(addTask("Buy Sim Card"));
