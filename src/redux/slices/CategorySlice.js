import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from '../actions/Actions';

const initialState = {
    data: [],
    errorMessage: '',
    isLoading: false
};

export const CategorySlice = createSlice({
    name: 'api',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
});

export default CategorySlice.reducer;