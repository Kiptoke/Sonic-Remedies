import axios from "axios";

const endpoint = process.env.SONICREM_DB_URI
  ? process.env.SONICREM_DB_URI
  : "http://localhost:5000";

const onError = (err) => {
  console.error(err.message);
};

const API = {
  getAll(resource) {
    return axios
      .get(endpoint + "/" + resource)
      .then((res) => res.data)
      .catch(onError);
  },
  getOne(resource, id) {
    return axios
      .get(endpoint + "/" + resource + "/" + id)
      .then((res) => res.data)
      .catch(onError);
  },
};

export default API;
