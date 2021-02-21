import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk(
  'jwt/signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://api-nodejs-todolist.herokuapp.com/user/login',
        { email: email, password: password },
      );
      console.log(response.data);
      let user = response.data;
      if (user) {
        setSession(user.token);
        return user;
      } else {
        return thunkAPI.rejectWithValue(response.data.error);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('jwt/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://api-nodejs-todolist.herokuapp.com/user/logout',
    );
    setSession(null);
    return null;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const getMe = createAsyncThunk('jwt/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://api-nodejs-todolist.herokuapp.com/user/me',
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const setSession = (access_token) => {
  if (access_token) {
    localStorage.setItem('jwt_access_token', access_token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
  } else {
    localStorage.removeItem('jwt_access_token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getAccessToken = () => {
  return window.localStorage.getItem('jwt_access_token');
};
