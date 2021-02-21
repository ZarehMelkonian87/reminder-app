import { createSlice } from "@reduxjs/toolkit";
import { signIn, getMe, logout } from "../actions/jwt";

const jwtSlice = createSlice({
  name: "jwt",
  initialState: {
    loading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: {
    // GET
    [signIn.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
      state.error = null;
    },

    [signIn.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
    },

    [signIn.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },

    [getMe.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
      state.error = null;
      state.user = null;
    },

    [getMe.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },

    [getMe.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },

    [logout.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
      state.error = null;
      state.user = null;
    },

    [logout.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },

    [logout.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { onAccessToken, onAutoLogout, onAutoLogin } = jwtSlice.actions;

export default jwtSlice.reducer;
