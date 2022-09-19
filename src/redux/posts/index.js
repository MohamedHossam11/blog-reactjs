import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { fetchAll, createPost } from './thunks';

export const slice = createSlice({
  name: 'posts',
  initialState: adapter.getInitialState({ meta: {} }),
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      const { payload, meta } = action;
      const { data } = payload;
      if (!data.posts) return;
      state.meta = { count: data.posts.count };
      adapter.setAll(state, data.posts.rows);
    });
  },
});
const Requests = {
  adapter,
  slice,
  thunks,
  selectors,
};
export default Requests;
