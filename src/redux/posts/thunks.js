import { createAsyncThunk } from '@reduxjs/toolkit';
import PostsAPI from './services';

export const fetchAll = createAsyncThunk(
  'posts/fetchAll',
  async (params, thunkAPI) => {
    try {
      const response = await PostsAPI.fetchAll(params);
      return { data: response.data, success: true };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        success: false,
        errors: error.response.data,
      });
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (data, thunkAPI) => {
    try {
      const response = await PostsAPI.create(data);
      return { data: response.data, success: true };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        success: false,
        errors: error.response.data,
      });
    }
  }
);
