import * as authReducers from "../reducers/authReducer";

export const login = (formData) => {
  return async (dispatch) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    if (
      formData.username === "super@gmail.com" &&
      formData.password === "12345678"
    ) {
      dispatch(
        authReducers.loginSuccess({
          token: "token1234",
          username: formData.username,
        })
      );

      return {
        status: true,
      };
    } else {
      return {
        status: false,
        code: 400,
        errors: {
          username: "Invalid username or password",
        },
      };
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(authReducers.logoutSuccess());
  };
};
