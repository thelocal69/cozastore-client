import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: true
};

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      productData: (state, action) => {
        
      }
    },
    extraReducers: (builder) => { },
  });