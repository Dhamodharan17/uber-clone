import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,

  // To perform actions with datalayer
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// exposing the action to the application
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors - to pull it back from data layer
export const selectOrigin = (state) => state.nav.origin; // One selector for each item
export const selectDestination = (state) => state.nav.origin;
export const selectTravelTimeInformation = (state) => state.nav.origin;

export default navSlice.reducer;