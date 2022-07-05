import api from './Login';

export const requestGetTasks = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const requestDeleteTask = async (endpoint) => {
  await api.delete(endpoint);
  return;
}

export const requestCreateTask = async (endpoint, descibre, listId ) => {
  const { data } = await api.post(endpoint, {
    descibre,
    listId
  });
  return (data);
}

export const requestUpdateTask = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}