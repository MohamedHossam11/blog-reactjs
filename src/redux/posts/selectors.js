import { createSelector } from '@reduxjs/toolkit';
import adapter from './adapter';

export const postsSelectors = {
  ...adapter.getSelectors((state) => {
    return state.posts;
  }),
};

export const getMeta = createSelector(
  (state) => state?.posts,
  (posts) => posts?.meta
);
