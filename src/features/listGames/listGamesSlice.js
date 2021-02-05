import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTopAdventure = createAsyncThunk(
  'listGames/getTopAdventure',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '3'} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const listGamesSlice = createSlice({
  name: 'listGames',
  initialState: {
    games: [
      {
        path: "/the-last-of-us",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-1",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-2",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-3",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-4",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-5",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-6",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-7",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-8",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-9",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
    ],
    listTopAdventure: [],
    status: null
  },
  extraReducers: {
    [getTopAdventure.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getTopAdventure.fulfilled]: (state, { payload }) => {
      state.listTopAdventure = payload
      state.status = 'success'
    },
    [getTopAdventure.rejected]: (state, {payload}) => {
      console.log(payload)
      state.status = 'failed'
    }
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectListGames = state => state.listGames.games;
export const selectTopAdventure = state => state.listGames.listTopAdventure;

export default listGamesSlice.reducer;
