import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://data.messari.io/api/v1',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
