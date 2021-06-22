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

  const reporting = async (query = {}) => {
    return get(`/api/v1/reporting`, query);
  };

  const users = {
    me: async () => {
      return get(`/api/v1/me`);
    },
    list: async (query = {}) => {
      return get(`/api/v1/users`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/users/${id}`, query);
    },
  };

  const conversations = {
    list: async (query = {}) => {
      return get(`/api/v1/conversations`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/conversations/${id}`, query);
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
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/customers/${id}`, query);
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
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/messages/${id}`, query);
    },
    create: async (message) => {
      return post(`/api/v1/messages`, {message});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/messages/${id}`);
    },
  };

  const tags = {
    list: async (query = {}) => {
      return get(`/api/v1/tags`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/tags/${id}`, query);
    },
    create: async (tag) => {
      return post(`/api/v1/tags`, {tag});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/tags/${id}`);
    },
  };

  const issues = {
    list: async (query = {}) => {
      return get(`/api/v1/issues`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/issues/${id}`, query);
    },
    create: async (issue) => {
      return post(`/api/v1/issues`, {issue});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/issues/${id}`);
    },
  };

  const notes = {
    list: async (query = {}) => {
      return get(`/api/v1/notes`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/notes/${id}`, query);
    },
    create: async (note) => {
      return post(`/api/v1/notes`, {note});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/notes/${id}`);
    },
  };

  const companies = {
    list: async (query = {}) => {
      return get(`/api/v1/companies`, query);
    },
    retrieve: async (id, query = {}) => {
      return get(`/api/v1/companies/${id}`, query);
    },
    create: async (company) => {
      return post(`/api/v1/companies`, {company});
    },
    destroy: async (id) => {
      return destroy(`/api/v1/companies/${id}`);
    },
  };

  return {
    me,
    companies,
    conversations,
    customers,
    issues,
    messages,
    notes,
    reporting,
    tags,
    users,
  };
};

module.exports = client;
