import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialState = {
  task: ["Buy Phone", "Buy Laptop", "Buy Tablat"],
};

const taskReducer = createSlice({
  name: "task",
  initialState: intialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (currTask, index) => index !== action.payload
      );
    },
  },
});

export const { addTask, deleteTask } = taskReducer.actions;

export const store = configureStore({
  reducer: { taskReducer: taskReducer.reducer },
});
