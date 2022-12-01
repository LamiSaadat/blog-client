import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/posts";

const initialState = {
  allPosts: [],
  loading: false,
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
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
