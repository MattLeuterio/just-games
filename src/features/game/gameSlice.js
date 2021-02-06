import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getGame = createAsyncThunk(
  'game/GetGame',
  async (slug) => {
    return axios.get(`https://api.rawg.io/api/games/${slug}`)
    .then(res => res.data).catch(err => console.error(err));
  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameData: [],
  },
  extraReducers: {
    [getGame.fulfilled]: (state, { payload }) => {
      state.gameData = payload
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGameData = state => state.game.gameData;

export default gameSlice.reducer;
