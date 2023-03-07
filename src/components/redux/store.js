import { configureStore } from "@reduxjs/toolkit";
import multiStepReducer from "./MultiStep/multiSteps";

export const store = configureStore({
  reducer: {
    multiStepReducer,
  },
});
