import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getPlatformsList = createAsyncThunk(
  'platform/getPlatformsList',
  async (slug) => {
    return axios.get(`https://api.rawg.io/api/platforms/lists/parents`)
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const platformsSlice = createSlice({
  name: 'platforms',
  initialState: {
    platformsList: [],
  },
  extraReducers: {
    [getPlatformsList.fulfilled]: (state, { payload }) => {
      state.platformsList = payload
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPlatforms = state => state.platforms.platformsList;


export default platformsSlice.reducer;
