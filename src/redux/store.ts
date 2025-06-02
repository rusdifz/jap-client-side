import { configureStore } from '@reduxjs/toolkit';
import officeReducer from './features/officeSlice';

const store = configureStore({
  reducer: {
    offices: officeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
