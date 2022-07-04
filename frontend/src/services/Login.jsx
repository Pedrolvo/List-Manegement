import axios from 'axios';
import { URL_BASE } from './URL_BASE';

const api = axios.create({
  baseURL: URL_BASE,
});

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestLoginNew = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export default api;