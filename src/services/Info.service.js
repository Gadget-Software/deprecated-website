import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInfo = createAsyncThunk(
  "BusinessInfo/fetchInfo",
  async () => {
    const response = await fetch("data.json");
    const payload = response.data;
    return payload;
  }
);
