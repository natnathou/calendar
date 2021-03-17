import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}
export interface PostState {
  posts: Post[];
}

export const fetchUserById = createAsyncThunk('api/fetchById', async () => {
  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.data as Post[];
});

const initialState: PostState = {
  posts: [],
};
export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default apiSlice.reducer;
