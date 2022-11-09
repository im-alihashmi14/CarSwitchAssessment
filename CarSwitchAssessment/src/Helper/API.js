import axios from 'axios';

class Api {
  static request({method, url, token, data = {}}) {
    return axios({
      method,
      url,
      ...(Object.keys(data).length !== 0 && {data: JSON.stringify(data)}),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  }
}

export default Api;
