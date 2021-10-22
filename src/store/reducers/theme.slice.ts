import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeSliceState = {
  theme: null | ThemeTypes;
  isReady: boolean;
};

const initialState: ThemeSliceState = {
  theme: null,
  isReady: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeTypes>) => {
      state.theme = action.payload;
      state.isReady = true;
    },
    toggleTheme: (state, action: PayloadAction<ThemeTypes>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
