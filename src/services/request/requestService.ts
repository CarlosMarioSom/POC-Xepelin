import axios from 'axios';
import { IGet } from './types/requestServiceInterfaces';

const get = async (getParams: IGet) => {
  const url = `${getParams.domain}${getParams.method}`;
  return axios
    .get(url, {
      params: getParams.params,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error);
      throw error;
    });
};

export { get };
