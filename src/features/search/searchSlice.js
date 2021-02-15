import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchResults = createAsyncThunk(
  'search/getSearchResults',
  async (params) => {
    return axios.get(`https://api.rawg.io/api/games`, { params: {search: params.text, page: params.page}})
    .then(res => res.data).catch(err => console.error(err));
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: []
  },
  extraReducers: {
    [getSearchResults.fulfilled]: (state, { payload }) => {
      state.searchResults = payload
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchResults = state => state.search.searchResults;

export default searchSlice.reducer;
