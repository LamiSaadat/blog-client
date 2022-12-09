import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/posts";

const loggedIn = localStorage.getItem("loggedIn")
  ? localStorage.getItem("loggedIn")
  : false;

const initialState = {
  allPosts: [],
  loading: false,
  loggedIn,
  singlePost: {},
};

export const getFeedPosts = createAsyncThunk(
  "posts/feed",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${url}/feed`);

      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ title, content, published }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      console.log(user);
      console.log(user.loggedIn);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accesstoken}`,
        },
      };

      const { data } = await axios.post(
        `${url}/create`,
        { title, content, published },
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

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const { data } = await axios.get(`${url}/${id}`);
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

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getFeedPosts.pending]: (state) => {
      state.loading = true;
    },
    [getFeedPosts.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      state.loading = false;
      console.log(state.allPosts);
    },
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.allPosts.push(payload);
      state.loggedIn = true;
      state.loading = false;
    },
    [getSinglePost.pending]: (state) => {
      state.loading = true;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.singlePost = payload;
    },
  },
});

export default postsSlice.reducer;
