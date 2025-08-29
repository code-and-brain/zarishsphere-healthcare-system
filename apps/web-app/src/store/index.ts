import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../workflows/patientSlice";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    // add other slices here
  },
});