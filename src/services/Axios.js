import axios from 'axios';
import {store} from 'store';
import useToast from '../hooks/useToast';

const {showErrorToast} = useToast();

const BASE_URL = '';

export const APIS = {
  // =================== auth =================== //
  login: '/api/login',
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    let errRes = error?.response?.data;
    showErrorToast(errRes);
    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  header = {},
  pathParams = '',
  isFormDate = false,
}) => {
  const accessToken = store.getState().auth?.token;
  console.log('TOKEN : ', accessToken);

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: isFormDate
      ? {
          'Content-Type': 'multipart/form-data',
          ...authHeder,
          ...header,
        }
      : {
          'Content-Type': 'application/json',
          ...authHeder,
          ...header,
        },
  });
  return response;
};

export default Axios;
