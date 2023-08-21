import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import productsReducer from "./productsSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  products: productsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: []
});

export const persistor = persistStore(store);
