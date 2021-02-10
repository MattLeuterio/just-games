import { configureStore } from '@reduxjs/toolkit';
import menuElementsReducer from '../features/menuElements/menuElementsSlice';
import quoteJumbotronReducer from '../features/quoteJumbotron/quoteJumbotronSlice';
import listGamesReducer from '../features/listGames/listGamesSlice';
import gameDataReducer from '../features/game/gameSlice';

export default configureStore({
  reducer: {
    menuElements: menuElementsReducer,
    quoteJumbotron: quoteJumbotronReducer,
    listGames: listGamesReducer,
    game: gameDataReducer,
  },
});
