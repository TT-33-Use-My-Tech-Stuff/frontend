import axios from 'axios';

const axiosWithAuth = () => {
  const token = sessionStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};
export default axiosWithAuth;
