import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { addToLocalStorage } from '../../utils/localStorageHelpers';

export const slice = createSlice({
  name: 'user',
  initialState: adapter.getInitialState({ meta: {} }),
  extraReducers: (builder) => {
    builder.addCase(thunks.login.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      if (!data.user) return;
      adapter.addOne(state, data.user);
      state.currentUser = data.user;
      addToLocalStorage('token', data.user.token);
      addToLocalStorage('user', data.user);
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
