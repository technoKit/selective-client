// api.js
import Axios from "axios";
const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

let urls = {
  test: baseURL,
  development: baseURL,
  production: baseURL,
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
