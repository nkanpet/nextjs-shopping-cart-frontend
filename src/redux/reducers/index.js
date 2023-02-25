import {combineReducers} from '@reduxjs/toolkit';

import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer
});