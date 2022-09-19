import { createAsyncThunk } from '@reduxjs/toolkit';
import UserAPI from './services';

export const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
  try {
    const response = await UserAPI.login(data);

    return { data: response.data, success: true };
  } catch (error) {
    return thunkAPI.rejectWithValue({
      success: false,
      errors: error.response.data,
    });
  }
});

export const signUp = createAsyncThunk('user/signUp', async (data, thunkAPI) => {
  try {
    const response = await UserAPI.signUp(data);

    return { data: response.data, success: true };
  } catch (error) {
    return thunkAPI.rejectWithValue({
      success: false,
      errors: error.response.data,
    });
  }
});
