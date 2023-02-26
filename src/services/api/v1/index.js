import {apiPromise} from '@/utils';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL + '/v1';
axios.defaults.headers['Accept-Language'] = 'th';
axios.defaults.headers['Accept'] = 'application/json';

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export default {
  auth: {
    login: form => {
      const options = {
        url: '/auth/login',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        data: form,
      };

      return apiPromise(axios(options));
    },
    logout: token => {
      const options = {
        url: '/auth/logout',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      return apiPromise(axios(options));
    },
  },
  product: {
    list: params => {
      const options = {
        url: '/products',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        params,
      };

      return apiPromise(axios(options));
    },
  },
  category: {
    list: params => {
      const options = {
        url: '/categories',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        params,
      };

      return apiPromise(axios(options));
    },
  },
  cart: {
    list: token => {
      const options = {
        url: '/cart',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      return apiPromise(axios(options));
    },
    addItem: (token, form) => {
      const options = {
        url: '/cart',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: form,
      };

      return apiPromise(axios(options));
    },
    updateItem: (token, id, form) => {
      const options = {
        url: `/cart/item/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: form,
      };

      return apiPromise(axios(options));
    },
    deleteItem: (token, id) => {
      const options = {
        url: `/cart/item/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      return apiPromise(axios(options));
    },
  },
};
