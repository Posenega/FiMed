import { configureStore } from "@reduxjs/toolkit";
import animationReducer from "../features/animation/AnimationSlice";

export const store = configureStore({
  reducer: {
    animation: animationReducer,
  },
});
