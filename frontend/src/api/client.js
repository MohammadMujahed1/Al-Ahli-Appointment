// Axios instance for the REST API. Adds "Authorization: Bearer <token>" when logged in.
import axios from 'axios';
import { getToken } from '../context/tokenStorage';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;
