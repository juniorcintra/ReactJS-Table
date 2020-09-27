import axios from "axios";
import querystring from "querystring";

const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

const queryBuilder = (params) => {
  const cleanParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value) cleanParams[key] = value;
  });
  return querystring.stringify(cleanParams);
};

const makeOptions = (authData) => ({
  headers: {
    ...headers,
    ...(authData && {
      Authorization: `Bearer ${authData.token}`,
    }),
  },
});

export default api;
export { makeOptions, queryBuilder };
