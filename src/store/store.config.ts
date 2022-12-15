import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// 透過 configureStore() 建立 Redux Store
export const store = configureStore({
  reducer: rootReducer,
});

// type definition
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
