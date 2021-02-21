import { configureStore, combineReducers } from "@reduxjs/toolkit";
import task from "./slices/task";
import jwt from "./slices/jwt";

const store = configureStore({
  reducer: combineReducers({
    task,
    jwt,
  }),
});

export default store;
