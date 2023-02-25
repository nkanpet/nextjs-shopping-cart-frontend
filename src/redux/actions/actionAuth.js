import {loginSuccess} from '../reducers/authReducer';
import api from '@/services/api/v1';

export const login = (username, password) => {
  return async dispatch => {
    // fetch api
    const response = await api.auth.login({username, password});

    if (response.status == 200) {
      // dispatch action to reducers
      dispatch(loginSuccess({token: response.data?.token, username}));

      // return response to container
      return {
        status: true,
        token: response.data?.token,
      };
    } else {
      const errors = response.data?.errors;

      // return response to container
      return {
        status: false,
        errors,
      };
    }
  };
};
