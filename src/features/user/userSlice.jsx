import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/user/login";

// initialize access token from local storage
const accesstoken = localStorage.getItem("accesstoken")
  ? localStorage.getItem("accesstoken")
  : null;

const initialState = {
  userInfo: {},
  accesstoken,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(url, { email, password }, config);

      localStorage.setItem("accesstoken", data.accesstoken);

      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [userLogin.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.accesstoken = payload.accesstoken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
