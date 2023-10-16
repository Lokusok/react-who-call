import axios from 'axios';

export const userAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/user`,
});

export const telAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/tel`,
});

export const telOuterAPI = axios.create({
  baseURL: 'https://num.voxlink.ru/',
});

export const commentsAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/comments`,
});

export const mailAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/mail`,
});
