import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchRegister,
  fetchLogIn,
  fetchLogOut,
  fetchCurrentAuth,
} from '../../service/authorization-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await fetchRegister(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await fetchLogIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await fetchLogOut();
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await fetchCurrentAuth();
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);