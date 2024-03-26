const initTheme = { theme: false };
export const themeReducer = (state = initTheme, action) => {
  if (action.type === "theme") {
    return (initTheme.theme = !initTheme.theme);
  }
  return initTheme.theme;
};