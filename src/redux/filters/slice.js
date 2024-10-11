import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: []}

export const sliceFilters = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    reducer1(state, {payload: userData}) {},
    reducer2(state, {payload: userData}) {},
    reducer3(state, {payload: userData}) {},
    reducer4: {
      reducer(state, {payload: userData}) {},
      prepare(userData) {},
    },
  },
});

export const { reducer1, reducer2, reducer3 } = sliceFilters.actions;
export default sliceFilters.reducer;