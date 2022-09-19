import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../router';
import Posts from './posts';
import User from './user';
import loadingSlice from './_loading';

const rootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    posts: Posts.slice.reducer,
    user: User.slice.reducer,
    _loading: loadingSlice.reducer,
  });

export default rootReducer;
