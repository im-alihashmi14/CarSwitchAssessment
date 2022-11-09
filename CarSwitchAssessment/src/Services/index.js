import Api from '../Helper/API';

export const getAgeByName = (name, callback = () => {}) => {
  Api.request({
    method: 'GET',
    url: `https://api.agify.io/?name=${name}`,
  })
    .then(res => {
      callback({success: true, data: res});
    })
    .catch(err => {
      callback({success: false, data: err});
    });
};
