import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

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
  async ({ title, content, published }, { rejectWithValue }) => {
    try {
      const { accesstoken } = useSelector((state) => state.user);
      console.log(accesstoken);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accesstoken}`,
        },
      };

      console.log("inside slice");

      const { data } = await axios.post(
        `${url}/create`,
        { title, content, published },
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
    [createPost.fulfilled]: (state, { payload }) => {
      state.allPost.push(payload);
      console.log(state.allPosts);
    },
  },
});

export default postsSlice.reducer;
