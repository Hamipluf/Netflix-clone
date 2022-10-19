import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/user/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
