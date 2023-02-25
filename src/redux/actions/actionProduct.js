import api from '@/services/api/v1';
import {getResponseErrorMessage} from '@/utils';
import {fetchSuccess} from '../reducers/productReducer';

export const fetchData = (params = {}) => {
  return async dispatch => {
    const response = await api.product.list(params);

    if (response.status == 200) {
      const {data} = response.data;
      dispatch(fetchSuccess({data: data?.data}));

      return {
        status: true,
        data: data?.data,
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
