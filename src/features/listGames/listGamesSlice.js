import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getListGames = createAsyncThunk(
  'listGames/getListGame',
  async () => {
    const token = window.localStorage.getItem('token'); 
    console.log('TOOOOKEN GET LIST GAMES', token)
    return axios({
      url: "https://api.igdb.com/v4/games",
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Client-ID': '06erbl6vxx1q3pt1ox1cl1buy8s7lj',
        'Authorization': `Bearer ${token}`
      },
      data: "fields name;"
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
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
    list: [],
    status: null
  },
  extraReducers: {
    [getListGames.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getListGames.fulfilled]: (state, { payload }) => {
      console.log('success | PAYLOAD', payload)
      state.list = payload
      state.status = 'success'
    },
    [getListGames.rejected]: (state, {payload}) => {
      console.log(payload)
      state.status = 'failed'
    }
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectListGames = state => state.listGames.games;
export const selectList = state => state.listGames.list;

export default listGamesSlice.reducer;
