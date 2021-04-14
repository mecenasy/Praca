import axios from 'axios';
import { basePath, authorizationHeaders } from './apiConfig';

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: basePath,
   headers: {
      ...authorizationHeaders,
   },
});

export default axiosInstance;
