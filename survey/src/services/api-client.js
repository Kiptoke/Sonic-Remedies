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
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch(onError);
  },
  getOne(resource, id) {
    return axios
      .get(endpoint + "/" + resource + "/" + id)
      .then((res) => res.data)
      .catch(onError);
  },
  post(resource, data) {
    return axios
      .post(endpoint + "/" + resource, data)
      .then((res) => res.data)
      .catch(onError);
  },
  deleteOne(resource, id) {
    return axios
      .delete(endpoint + "/" + resource + "/" + id)
      .then((res) => res.data)
      .catch(onError);
  },
  patch(resource, data) {
    return axios
      .patch(endpoint + "/" + resource, data)
      .then((res) => res.data)
      .catch(onError);
  },
  patchOne(resource, id, data) {
    return axios
      .patch(endpoint + "/" + resource + "/" + id, data)
      .then((res) => res.data)
      .catch(onError);
  },
  putOne(resource, id, data) {
    return axios
      .put(endpoint + "/" + resource + "/" + id, data)
      .then((res) => res.data)
      .catch(onError);
  },
};
export default API;
