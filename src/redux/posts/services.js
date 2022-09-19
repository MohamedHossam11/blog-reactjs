import axios from '../../utils/requestHelper';

const fetchAll = (params) => axios.get('/v1/blog', { params });

const create = (data) =>
  axios({
    method: 'post',
    url: '/v1/blog/create_post',
    data,
  });

const RequestsAPI = {
  fetchAll,
  create,
};

export default RequestsAPI;
