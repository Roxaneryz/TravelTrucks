import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const sliceCampers = createSlice({
  name: "Campers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload: userData }) => {
        state.isLoading = false;
        state.error = null;
        state.items = userData;
      })
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { reducer1, reducer2, reducer3 } = sliceCampers.actions;
export default sliceCampers.reducer;
