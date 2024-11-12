import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { loadingReducer } from "./features/loadingSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem() {
//       return Promise.resolve(null);
//     },
//     setItem(_key: string, value: number) {
//       return Promise.resolve(value);
//     },
//     removeItem() {
//       return Promise.resolve();
//     },
//   };
// };


//check if use in browser only
// const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// const authPersistConfig = {
//   key: "auth",
//   storage: storage,
//   whitelist: ["accessToken", "isLoggedIn", "profile", "contact", "lineProfile", "lineLiffid", "factoryProfile"],
// };

// const addressPersistConfig = {
//   key: "address",
//   storage: storage,
//   whitelist: [ 'ship_address', 'transport_type',  ],
// };

// const persistedReducer = persistReducer(authPersistConfig, authReducer);

// const addressPersistedReducer = persistReducer(addressPersistConfig, addressReducer);

const rootReducer = combineReducers({
  // auth: persistedReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;