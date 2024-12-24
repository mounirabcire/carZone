import { configureStore } from "@reduxjs/toolkit";
import HomeOptionReducer from "./features/homePostOptionSlice";

export const store = configureStore({
    reducer: {
        homePostOption: HomeOptionReducer,
    },
});

// RootState now knows about all slices in the store
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch knows which actions you can use
export type AppDispatch = typeof store.dispatch;
