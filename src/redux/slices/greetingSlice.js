import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/messages';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  },
);

const initialState = [];

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => action.payload);
  },
});

export default greetingsSlice.reducer;
