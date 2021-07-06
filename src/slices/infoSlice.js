import { createSlice } from "@reduxjs/toolkit";
import { fetchInfo } from "../services/Info.service";

// set initial state of slice of store
export const initialState = {
  apiStatus: "idle",
  filterStatus: null,
  query: "",
  error: null,
  info: [],
};

// a slice of root reducer
const InfoSlice = createSlice({
  name: "BusinessInfo",
  initialState,
  reducers: {
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
    updateQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchInfo.fulfilled]: (state, action) => {
      const data = action.payload;
      const errors = data["errors"] ? data["errors"] : null;
      if (errors) {
        state.status = "failed";
        state.error = errors;
      } else {
        return { ...state, info: data };
      }
    },
    [fetchInfo.rejected]: (state, action) => {
      state.status = "failed";
      return { ...state, error: action.error };
    },
  },
});

export const { setFilterStatus, updateQuery } = InfoSlice.actions;
export default InfoSlice.reducer;
