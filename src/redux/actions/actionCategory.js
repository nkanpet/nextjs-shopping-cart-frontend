import api from '@/services/api/v1';
import {getResponseErrorMessage} from '@/utils';
import {fetchSuccess} from '../reducers/categoryReducer';

export const fetchData = (params = {}) => {
  return async dispatch => {
    const response = await api.category.list(params);

    if (response.status == 200) {
      dispatch(fetchSuccess({data: response.data?.data}));

      return {
        status: true,
        data: response.data?.data,
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
