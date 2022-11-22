import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/user";

// initialize access token from local storage
const accesstoken = localStorage.getItem("accesstoken")
  ? localStorage.getItem("accesstoken")
  : null;

const initialState = {
  userInfo: {},
  accesstoken,
  loggedIn: false,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${url}/login`,
        { email, password },
        config
      );

      localStorage.setItem("accesstoken", data.accessToken);

      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user.accesstoken}`,
        },
      };
      const { data } = await axios.get(`${url}/account`, config);

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
  reducers: {
    logout: (state) => {
      state.userInfo = {};
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.accesstoken = payload.accesstoken;
      state.loggedIn = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.loggedIn = true;
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
