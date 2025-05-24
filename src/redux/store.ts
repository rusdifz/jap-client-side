import { configureStore } from '@reduxjs/toolkit';
// import propertySlice from './features/propertySlice';
import officeReducer from './features/officeSlice';

const store = configureStore({
  reducer: {
    offices: officeReducer,
    // properties: propertySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
