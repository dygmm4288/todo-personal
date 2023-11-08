import { createSlice } from "@reduxjs/toolkit";
import { alter } from "../lib/alter";
import theme from "../lib/theme";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const initialState = {
  theme: LIGHT_THEME,
  themeObject: theme.lightTheme,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const ifLightThemeThan = alter(
        () => state.themeReducer.theme === LIGHT_THEME,
      );
      state.themeReducer.theme = ifLightThemeThan(DARK_THEME, LIGHT_THEME);
      state.themeReducer.themeObject = ifLightThemeThan(
        theme.darkTheme,
        theme.lightTheme,
      );
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (store) => {
  return store.themeReducer.themeObject;
};

export default themeSlice.reducer;
