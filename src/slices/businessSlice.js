/* eslint-disable no-debugger */
import { createSlice } from "@reduxjs/toolkit";
import fetchBusinessInfo from "../services/Business.service";

// set initial state of slice of store
export const initialState = {
  loading: true,
  status: "idle",
  error: null,
  info: null,
};

// a slice of root reducer
const InfoSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchBusinessInfo.fulfilled]: (state, action) => {
      const data = action.payload;
      const errors = data["errors"] ? data["errors"] : null;
      if (errors) {
        state.status = "failed";
        state.error = errors;
      } else {
        console.log(data);
        return { ...state, info: data, status: "good", loading: false };
      }
    },
    [fetchBusinessInfo.rejected]: (state, action) => {
      state.loading = false;
      state.status = "failed";
      return { ...state, error: action.error };
    },
  },
});

export const { loading } = InfoSlice.actions;
export default InfoSlice.reducer;
