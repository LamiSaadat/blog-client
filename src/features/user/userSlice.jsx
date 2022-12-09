import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/user";

// initialize access token from local storage
const accesstoken = localStorage.getItem("accesstoken")
  ? localStorage.getItem("accesstoken")
  : null;

// initialize logged in user info from local storage
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  userInfo,
  accesstoken,
  loggedIn: true,
  // for register
  success: false,
  othersInfo: {},
  loading: false,
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

      localStorage.setItem("userInfo", JSON.stringify(data));
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

export const getOthersProfile = createAsyncThunk(
  "user/getOthersProfile",
  async (id, { rejectWithValue }) => {
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
      state.loading = false;
      console.log(state.success);
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.accesstoken = payload.accesstoken;
      state.loggedIn = true;
      state.loading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [getUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.loggedIn = true;
      state.loading = false;
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [getOthersProfile.fulfilled]: (state, { payload }) => {
      state.othersInfo = payload;
      state.loading = false;
    },
    [getOthersProfile.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
