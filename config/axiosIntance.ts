import axios from 'axios';

let BACKEND_URL
const env = process.env.NODE_ENV
if (env !== "production") {
  BACKEND_URL = 'http://localhost:3333';
}
else {
  BACKEND_URL = 'https://quinz-api.onrender.com';
}

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    accept: '*/*',
  },
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers['x-auth-token'] = accessToken
      config.headers["Access-Control-Allow-Origin"]="*"
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance