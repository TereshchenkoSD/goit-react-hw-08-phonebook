import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchRegister = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
};

export const fetchLogIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

export const fetchLogOut = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const fetchCurrentAuth = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
