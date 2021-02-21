import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk(
  "task/getTasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api-nodejs-todolist.herokuapp.com/task"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://api-nodejs-todolist.herokuapp.com/task/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async ({ data }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://api-nodejs-todolist.herokuapp.com/task",
        data
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
