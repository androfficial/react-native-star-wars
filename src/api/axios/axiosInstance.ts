import { API_URL } from '@env';
import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
