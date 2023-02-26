import {combineReducers} from '@reduxjs/toolkit';

import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});
