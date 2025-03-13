import { configureStore } from '@reduxjs/toolkit';
import propertySlice from './features/propertySlice';
import officeReducer from './features/officeSlice';
// import officeSlice, { officeReducer } from './features/officeSlice';

const store = configureStore({
  reducer: {
    properties: propertySlice,
    offices: officeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
