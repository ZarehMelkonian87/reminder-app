import { createSlice } from "@reduxjs/toolkit";
import { getTasks, createTask, deleteTask } from "../actions/task";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
    item: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // GET
    [getTasks.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
      state.items = [];
    },

    [getTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload.data;
    },

    [getTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.items = [];
    },
    // DELETE
    [deleteTask.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    [deleteTask.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
      state.items = state.items.filter((i) => i._id !== action.meta.arg.id);
    },

    [deleteTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // CREATE
    [createTask.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    [createTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = [action.payload.data, ...state.items];
    },

    [createTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
