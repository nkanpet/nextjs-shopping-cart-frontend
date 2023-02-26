import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logoutSuccess: state => {
      state.token = null;
      state.username = null;
    },
    sessionExpried: state => {
      state.token = null;
    },
  },
});

export const {loginSuccess, logoutSuccess, sessionExpried} = authSlice.actions;

export default authSlice.reducer;
