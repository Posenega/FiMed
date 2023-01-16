import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const animationSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    expand: (state) => {
      state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { expand } = animationSlice.actions;

export default animationSlice.reducer;
