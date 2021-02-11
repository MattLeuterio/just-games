import { createSlice } from '@reduxjs/toolkit';
import {
  bgGenreAdventure,
  bgGenreSports,
  bgGenreShooter,
  bgGenreIndie,
  bgGenreMoba,
  bgGenreRpg,
  bgGenreArcade
} from '../../ui/assets/img/bg-genre';

export const menuElementsSlice = createSlice({
  name: 'menuElements',
  initialState: {
    main: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Adventure",
        path: "/adventure",
        background: bgGenreAdventure
      },
      {
        title: "Shooter",
        path: "/shooter",
        background: bgGenreShooter
      },
      {
        title: "Sport",
        path: "/sports",
        background: bgGenreSports
      },
      {
        title: "Indie",
        path: "/indie",
        background: bgGenreIndie
      },
      {
        title: "RPG",
        path: "/role-playing-games-rpg",
        background: bgGenreRpg
      },
      {
        title: "MOBA",
        path: "/massively-multiplayer",
        background: bgGenreMoba
      },
      {
        title: "Arcade",
        path: "/arcade",
        background: bgGenreArcade
      },
    ],
    footer: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      }
    ]
  }
});

export const selectMenuMain = state => state.menuElements.main;
export const selectMenuFooter = state => state.menuElements.footer;

export default menuElementsSlice.reducer;
