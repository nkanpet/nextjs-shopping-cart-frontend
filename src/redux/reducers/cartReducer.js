const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    fetchSucess: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const {fetchSucess} = cartSlice.actions;

export default cartSlice.reducer;
