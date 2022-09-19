import adapter from './adapter';

export const userSelectors = {
  ...adapter.getSelectors((state) => {
    return state.user;
  }),
};
