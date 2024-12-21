import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appSettingsSlice from './appFunction.slice';
import hymmsSlice from './slice/hymms.slice';

const reducers = combineReducers({
  appsettings: appSettingsSlice, // Fix: Use `.reducer` property
  hymms: hymmsSlice, // Fix: Use `.reducer` property
});

export const store = configureStore({
  reducer: reducers,
  middleware: defaultMiddleware => [
    ...defaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
