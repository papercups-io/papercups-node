const request = require('superagent');

const client = (token = process.env.PAPERCUPS_API_KEY, options = {}) => {
  const {host = 'https://app.papercups.io'} = options;

  const me = async () => {
    return request
      .get(`${host}/api/v1/me`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => res.body.data);
  };

  const conversations = {
    list: async (query = {}) => {
      return request
        .get(`${host}/api/v1/conversations`)
        .set('Authorization', `Bearer ${token}`)
        .query(query)
        .then((res) => res.body.data);
    },
    retrieve: async (id) => {
      return request
        .get(`${host}/api/v1/conversations/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body.data);
    },
    create: async (conversation) => {
      return request
        .post(`${host}/api/v1/conversations`)
        .set('Authorization', `Bearer ${token}`)
        .send({conversation})
        .then((res) => res.body.data);
    },
    update: async (id, updates) => {
      return request
        .put(`${host}/api/v1/conversations/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({conversation: updates})
        .then((res) => res.body.data);
    },
    destroy: async (id) => {
      return request
        .del(`${host}/api/v1/conversations/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body);
    },
  };

  const customers = {
    list: async (query = {}) => {
      return request
        .get(`${host}/api/v1/customers`)
        .set('Authorization', `Bearer ${token}`)
        .query(query)
        .then((res) => res.body.data);
    },
    retrieve: async (id) => {
      return request
        .get(`${host}/api/v1/customers/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body.data);
    },
    create: async (customer) => {
      return request
        .post(`${host}/api/v1/customers`)
        .set('Authorization', `Bearer ${token}`)
        .send({customer})
        .then((res) => res.body.data);
    },
    update: async (id, updates) => {
      return request
        .put(`${host}/api/v1/customers/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({customer: updates})
        .then((res) => res.body.data);
    },
    destroy: async (id) => {
      return request
        .del(`${host}/api/v1/customers/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body);
    },
  };

  const messages = {
    list: async (query = {}) => {
      return request
        .get(`${host}/api/v1/messages`)
        .set('Authorization', `Bearer ${token}`)
        .query(query)
        .then((res) => res.body.data);
    },
    retrieve: async (id) => {
      return request
        .get(`${host}/api/v1/messages/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body.data);
    },
    create: async (message) => {
      return request
        .post(`${host}/api/v1/messages`)
        .set('Authorization', `Bearer ${token}`)
        .send({message})
        .then((res) => res.body.data);
    },
    destroy: async (id) => {
      return request
        .del(`${host}/api/v1/messages/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body);
    },
  };

  return {me, conversations, customers, messages};
};

module.exports = client;
