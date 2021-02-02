import { createSlice } from '@reduxjs/toolkit';

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
      },
      {
        title: "Shooter",
        path: "/shooter",
      },
      {
        title: "Sport",
        path: "/sport",
      },
      {
        title: "Indie",
        path: "/indie",
      },
      {
        title: "RPG",
        path: "/rpg",
      },
      {
        title: "MOBA",
        path: "/moba",
      },
      {
        title: "Simulator",
        path: "/simulator",
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
