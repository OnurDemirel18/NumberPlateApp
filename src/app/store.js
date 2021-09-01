import { configureStore } from '@reduxjs/toolkit';
import platesReducer from './platesReducer';


export const store = configureStore({
  reducer: {
    platesReducer: platesReducer
  },
});
