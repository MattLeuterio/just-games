import { createSlice } from '@reduxjs/toolkit';

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
    ]
  }
});

export const selectListGames = state => state.listGames.games;

export default listGamesSlice.reducer;
