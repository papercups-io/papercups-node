const request = require('superagent');

const client = (token = process.env.PAPERCUPS_API_KEY, options = {}) => {
  const {host = 'https://app.papercups.io'} = options;

  const get = async (endpoint, query = {}) => {
    return request
      .get(`${host}${endpoint}`)
      .set('Authorization', `Bearer ${token}`)
      .query(query)
      .then((res) => res.body.data);
  };

  const post = async (endpoint, body = {}) => {
    return request
      .post(`${host}${endpoint}`)
      .set('Authorization', `Bearer ${token}`)
      .send(body)
      .then((res) => res.body.data);
  };

  const put = async (endpoint, body = {}) => {
    return request
      .put(`${host}${endpoint}`)
      .set('Authorization', `Bearer ${token}`)
      .send(body)
      .then((res) => res.body.data);
  };

  const destroy = async (endpoint) => {
    return request
      .del(`${host}${endpoint}`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => res.body);
  };

  const me = async () => {
    return get(`/api/v1/me`);
  };

  const conversations = {
    list: async (query = {}) => {
      return get(`/api/v1/conversations`, query);
    },
    retrieve: async (id) => {
      return get(`/api/v1/conversations/${id}`);
    },
    create: async (conversation) => {
      return post(`/api/v1/conversations`, {conversation});
    },
    update: async (id, updates) => {
      return put(`/api/v1/conversations/${id}`, {conversation: updates});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/conversations/${id}`);
    },
  };

  const customers = {
    list: async (query = {}) => {
      return get(`/api/v1/customers`, query);
    },
    retrieve: async (id) => {
      return get(`/api/v1/customers/${id}`);
    },
    create: async (customer) => {
      return post(`/api/v1/customers`, {customer});
    },
    update: async (id, updates) => {
      return put(`/api/v1/customers/${id}`, {customer: updates});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/customers/${id}`);
    },
  };

  const messages = {
    list: async (query = {}) => {
      return get(`/api/v1/messages`, query);
    },
    retrieve: async (id) => {
      return get(`/api/v1/messages/${id}`);
    },
    create: async (message) => {
      return post(`/api/v1/messages`, {message});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/messages/${id}`);
    },
  };

  return {me, conversations, customers, messages};
};

module.exports = client;
