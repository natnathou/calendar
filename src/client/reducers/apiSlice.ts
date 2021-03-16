import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return (await response.json()) as Post[];
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
