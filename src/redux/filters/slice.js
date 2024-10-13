import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filterProps: {
    AC: false,
    kitchen: false,
    automatic: false,
    TV: false,
    bathroom: false,
    gas: false,
    radio: false,
    microwave: false,
  },
  location: "",

  type: {
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  },
};

export const sliceFilters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filterProps[payload.name] = payload.value;
    },

    setLocation(state, { payload }) {
      state.location = payload;
    },
    setType(state, { payload }) {
       state.type[payload.name] = payload.value;
    },
    
  },
});

export const { setFilter, setLocation, setType} = sliceFilters.actions;
export default sliceFilters.reducer;