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
  loggedIn: true,
  // for register
  success: false,
  othersInfo: {},
};

export const register = createAsyncThunk(
  "user/register",
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${url}/signup`,
        { firstName, lastName, email, password },
        config
      );
      console.log(data);
      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

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
      localStorage.setItem("loggedIn", initialState.loggedIn);

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

export const getOthersProfile = createAsyncThunk(
  "user/getOthersProfile",
  async (arg, { id, rejectWithValue }) => {
    // console.log(id);
    try {
      const { data } = await axios.get(`${url}/profile/${id}`);

      console.log(data);

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
    [register.fulfilled]: (state) => {
      state.success = true;
      console.log(state.success);
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
    },
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
    [getOthersProfile.fulfilled]: (state, { payload }) => {
      state.othersInfo = payload;
    },
    [getOthersProfile.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
