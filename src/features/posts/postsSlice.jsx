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
  like: {},
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
    try {
      const { data } = await axios.get(`${url}/${id}`);

      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ userId, postId, like }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accesstoken}`,
        },
      };

      const { data } = await axios.post(
        `${url}/${postId}/like`,
        { userId, postId, like },
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

export const unlikePost = createAsyncThunk(
  "posts/likePost",
  async ({ userId, postId }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accesstoken}`,
        },
      };

      const { data } = await axios.post(
        `${url}/${postId}/unlike`,
        { userId, postId },
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
    [likePost.pending]: (state) => {
      state.loading = true;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.singlePost.likes.push(payload);
      state.userInfo.Like.push(payload);
    },
    [unlikePost.pending]: (state) => {
      state.loading = true;
    },
    [unlikePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.like = payload;
    },
  },
});

export default postsSlice.reducer;
