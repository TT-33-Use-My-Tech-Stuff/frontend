import axios from 'axios';

const axiosWithAuth = () => {
  const token = sessionStorage.getItem('token');

  // return axios.create({
  //   headers: {
  //     Authorization: token,
  //   }
  // });

  return axios.create({
    headers:  {
      Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
};

export default axiosWithAuth;

/**
 * PETER BASE URL - NODE: https://tt-33-use-my-tech.herokuapp.com/
 * OSCAR BASE URL - JAVA: https://git.heroku.com/buildweek-usemytech.git
 */