import axios from '../../utils/requestHelper';

const login = (data) =>
  axios({
    method: 'post',
    url: '/v1/auth/login',
    data,
  });

const signUp = (data) =>
  axios({
    method: 'post',
    url: '/v1/auth/sign_up',
    data,
  });

const RequestsAPI = {
  login,
  signUp,
};

export default RequestsAPI;
