import axios from 'axios';

export const userAPI = axios.create({
  baseURL: 'http://localhost:5500/user',
});

export const telAPI = axios.create({
  baseURL: 'http://localhost:5500/tel',
});

export const telOuterAPI = axios.create({
  baseURL: 'https://num.voxlink.ru/',
});