import axios from 'axios';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Clear auth data
      Cookies.remove('auth_token');
      Cookies.remove('user');
      
      // Redirect to login
      window.location.href = '/login';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);