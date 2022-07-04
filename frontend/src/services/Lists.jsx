import api from './Login';

export const requestGetLists = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body);
  return data;
}

export const requestDeleteList = async (endpoint) => {
  await api.delete(endpoint);
  return;
}

export const requestCreateList = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return JSON.parse(data);
}