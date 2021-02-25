const request = require('superagent');

const client = (token = process.env.PAPERCUPS_API_KEY, options = {}) => {
  const {host = 'https://app.papercups.io'} = options;

  const me = async () => {
    return request
      .get(`${host}/api/v1/me`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => res.body.data);
  };

  return {me};
};

module.exports = client;
