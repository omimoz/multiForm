import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
  inputVal: {},
};
export const multiStepSlice = createSlice({
  name: "multiStep",
  initialState,
  reducers: {
    setInputVal: (state, action) => {
      state.inputVal = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});
export const { setInputVal, setCurrent } = multiStepSlice.actions;
export default multiStepSlice.reducer;
