import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import menuElementsReducer from '../features/menuElements/menuElementsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    menuElements: menuElementsReducer
  },
});
