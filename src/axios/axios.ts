import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_BASE_URL,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig | any => {
  setTimeout(() => {
    localStorage.getItem("token");
  }, 1);
  const token = localStorage.getItem("token");

  if (token) {
    (config.headers as any).Authorization = `Bearer ${token}`;
  }

  return config;
};

const onResponse = (config: AxiosResponse): AxiosResponse => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

//instance.defaults.headers.common["Authorization"] =
//  "Bearer " + localStorage.getItem("eggtoken");

export default instance;
