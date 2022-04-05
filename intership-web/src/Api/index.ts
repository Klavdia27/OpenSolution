import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API = axios.create({
  baseURL: process.env.API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => error,
);

API.interceptors.request.use(
  (request: AxiosRequestConfig) => request,
  (error: AxiosError) => error,
);
