import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import menuElementsReducer from '../features/menuElements/menuElementsSlice';
import quoteJumbotronReducer from '../features/quoteJumbotron/quoteJumbotronSlice';
import listGamesReducer from '../features/listGames/listGamesSlice';
import authReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    menuElements: menuElementsReducer,
    quoteJumbotron: quoteJumbotronReducer,
    auth: authReducer,
    listGames: listGamesReducer,
  },
});
