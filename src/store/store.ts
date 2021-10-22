/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countriesApi } from '../services/api/countries';
import { setLocalStorage } from '../utils/localStorage';
import { themeReducer } from './reducers/theme.slice';

const rootReducer = combineReducers({
  themeReducer,
  [countriesApi.reducerPath]: countriesApi.reducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesApi.middleware),
  });
};

const store = setupStore();

store.subscribe(() => {
  setLocalStorage<ThemeTypes | null>(
    'theme',
    store.getState().themeReducer.theme
  );
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { store };
