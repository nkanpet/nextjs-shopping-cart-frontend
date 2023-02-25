import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: []
};

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    fetchSuccess: (state, action) => {
        state.data = action.payload.data
    }
  },
});

export const {fetchSuccess} = categorySlice.actions;

export default categorySlice.reducer;
