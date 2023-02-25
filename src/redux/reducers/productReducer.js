import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    fetchSuccess: (state, action) => {
        state.data = action.payload.data
    }
  },
});

export const {fetchSuccess} = productSlice.actions;

export default productSlice.reducer;
