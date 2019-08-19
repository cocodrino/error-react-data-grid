/*

import * as axios from 'axios';

 const Axios = axios.create({
  baseURL: 'https://api.bitadata.com/v1',
}); */

// an api mock
const Axios = {
  post: (url, body) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: body });
      }, 200);
    }),
};

export default Axios;
