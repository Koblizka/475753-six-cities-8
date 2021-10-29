import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://8.react.pages.academy/six-cities' as const ;
const SERVER_TIMEOUT = 5000 as const;

enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallback = () => void;

const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create(
    {
      baseURL: BASE_URL,
      timeout: SERVER_TIMEOUT,
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;

      return response?.status === HttpCode.Unauthorized ? onUnauthorized : Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};

export {createApi};
