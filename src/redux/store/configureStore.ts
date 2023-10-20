import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducers, rootPersistConfig } from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from "react-redux";

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducers),
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch<AppDispatch>();
const { dispatch } = store;

export { store, persistor, dispatch, useSelector, useDispatch };
