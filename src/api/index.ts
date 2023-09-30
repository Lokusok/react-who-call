import axios from 'axios';

export const userAPI = axios.create({
  baseURL: 'http://localhost:5500/user',
});
