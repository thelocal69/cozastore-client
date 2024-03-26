import axios from "axios";
import Store from "../redux/Store";

const Http = axios.create({
  baseURL: `http://localhost:9000`,
  //baseURL: `http://13.213.52.74:8082`,
});

Http.interceptors.request.use(
  function (request) {
    const token = Store.getState().auth.accessToken;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Http.defaults.withCredentials = true;
//Http.defaults.headers.common['ngrok-skip-browser-warning'] = "any value";

Http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error.response.data.error);
    return Promise.reject(error);
  }
);

export default Http;
