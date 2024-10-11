import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk("campers/fetchCampers",
async (_, thunkAPI) => {
   const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
   const END_POINT = "/campers";
   const url = BASE_URL + END_POINT;

   const params = {};
   const headers = {};

   try {
     const response = await axios.get(url, { params, headers });
     return response.data;
   } catch (e) {
     return thunkAPI.rejectWithValue(e.message);
   }
}
);