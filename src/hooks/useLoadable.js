import { useLoadingSelector } from '../redux/selectors';
import { fetchAll, createPost } from '../redux/posts/thunks';
import { login, signUp } from '../redux/user/thunks';

const useLoadable = () => {
  return {
    isLoading: [
      useLoadingSelector(fetchAll),
      useLoadingSelector(createPost),
      useLoadingSelector(login),
      useLoadingSelector(signUp),
    ].includes(true),
  };
};

export default useLoadable;
