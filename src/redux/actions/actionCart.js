import api from '@/services/api/v1';
import {fetchSucess} from '../reducers/cartReducer';
import {getResponseErrorMessage} from '@/utils';

export const fetchData = () => {
  return async (dispatch, getState) => {
    const {auth} = getState();
    const response = await api.cart.list(auth.token);

    if (response.status == 200) {
      dispatch(fetchSucess({data: response.data?.data}));

      return {
        status: true,
      };
    } else {
      const error = getResponseErrorMessage(response);

      return {
        status: false,
        error,
      };
    }
  };
};

export const addItem = form => {
  return async (dispatch, getState) => {
    const {auth} = getState();
    const response = await api.cart.addItem(auth.token, form);

    if (response.status == 200) {
      dispatch(fetchSucess({data: response.data?.data}));

      return {
        status: true,
      };
    } else {
      const error = getResponseErrorMessage(response);

      return {
        status: false,
        error,
      };
    }
  };
};

export const updateItem = (cart_product_id, form) => {
  return async (dispatch, getState) => {
    const {auth} = getState();
    const response = await api.cart.updateItem(auth.token, cart_product_id, form);

    if (response.status == 200) {
      dispatch(fetchSucess({data: response.data?.data}));

      return {
        status: true,
      };
    } else {
      const error = getResponseErrorMessage(response);

      return {
        status: false,
        error,
      };
    }
  };
};

export const deleteItem = cart_product_id => {
  return async (dispatch, getState) => {
    const {auth} = getState();
    const response = await api.cart.deleteItem(auth.token, cart_product_id);

    if (response.status == 200) {
      dispatch(fetchSucess({data: response.data?.data}));

      return {
        status: true,
      };
    } else {
      const error = getResponseErrorMessage(response);

      return {
        status: false,
        error,
      };
    }
  };
};
