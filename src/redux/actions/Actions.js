import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategory } from '../../services/CategoryService';

export const themeAction = () => {
  return {
    type: 'theme',
  };
};

export const getCategories = createAsyncThunk('api/categories', async (data, { rejectWithValue }) => {
  const response = await getAllCategory();
  if(response.status < 200 || response.status >= 300){
    return rejectWithValue(response);
  }
  return response.data;
});