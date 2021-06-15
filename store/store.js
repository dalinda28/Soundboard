import SoundsSliceReducer from "../slices/SoundsSlice"
import { combineReducers,configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";

/**
 * Combine reducer
 * */
const reducers = combineReducers({ sounds: SoundsSliceReducer });
const persistedReducer = persistReducer(
  { key: "root", storage: AsyncStorage },
  reducers
);

/**
 * Give reducers to store
 * */
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
	  serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	  },
	}),
  });
  
export const persistor = persistStore(store);