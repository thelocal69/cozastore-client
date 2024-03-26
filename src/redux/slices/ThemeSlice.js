import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   theme: false,
  };

  export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      theme: (state, action) => {
        if (action.type === "theme") {
            return (state.theme = !state.theme);
          }
          return state.theme;
      },
    },
    extraReducers: (builder) => { },
  });