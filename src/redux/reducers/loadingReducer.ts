import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApisTypes } from "../api/APIs";

export type InitialLoaderStateTypes = ApisTypes<boolean>;

const initialState: InitialLoaderStateTypes = {};

const loadersSlice = createSlice({
    name: "loaders",
    initialState: initialState,
    reducers: {
        enableLoader(
            state,
            action: PayloadAction<keyof InitialLoaderStateTypes>,
        ) {
            return { ...state, [action.payload]: true };
        },
        disableLoader(
            state,
            action: PayloadAction<keyof InitialLoaderStateTypes>,
        ) {
            return { ...state, [action.payload]: false };
        },
    },
});

export const { disableLoader, enableLoader } = loadersSlice.actions;

export default loadersSlice.reducer;
