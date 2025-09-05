import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to include token if using localStorage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor to handle 401 errors
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 ||
            error.response?.data?.message === "jwt expired" ||
            error.message.includes('jwt expired')) {

            // Clear authentication
            localStorage.removeItem('token');

            // Use window.location for hard redirect
            window.location.replace('/login');
        }
        return Promise.reject(error);
    }
);

export default api;