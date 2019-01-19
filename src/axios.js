import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    common: {
      Authorization: "AUTH TOKEN FROM INSTANCE"
    }
  }
});

instance.interceptors.request.use(
  request => {
    //console.log("[index.js] - request: ", request);
    return request;
  },
  error => {
    //console.log("[index.js] - request error: ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    //console.log("[index.js] - response: ", response);
    return response;
  },
  error => {
    //console.log("[index.js] - response error: ", error);
    return Promise.reject(error);
  }
);

export default instance;
