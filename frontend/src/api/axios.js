import axios from "axios";

const axiosInstance = axios.create({
  
  baseURL: import.meta.env.VITE_API_URL, // Example: http://localhost:8000/api/v1
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Refresh Access Token
const refreshAccessToken = async () => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/users/refresh-token`,
    {},
    {
      withCredentials: true,
    },
  );
};

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Uncomment while debugging
    console.log(`${config.method?.toUpperCase()} ${config.url}`);

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/users/login") &&
      !originalRequest.url.includes("/users/register") &&
      !originalRequest.url.includes("/users/current-user") &&
      !originalRequest.url.includes("/users/refresh-token")
    ) {
      originalRequest._retry = true;
      try {
        await refreshAccessToken();
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Later we'll replace this with AuthContext logout
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
