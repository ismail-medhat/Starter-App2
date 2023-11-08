// mySlice.ts

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  loading: false,
  isSkip: false,
  appLang: 'en',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default authSlice.reducer;
