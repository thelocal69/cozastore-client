import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import CategorySlice from "./slices/CategorySlice";
import { themeReducer } from "./reducer/Reducer";

const reducers = combineReducers({
  theme: themeReducer,
  categories: CategorySlice, 
});


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: persistedReducer
});

export default Store;
