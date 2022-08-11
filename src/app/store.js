import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import{useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
