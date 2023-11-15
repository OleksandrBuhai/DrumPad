import { configureStore } from "@reduxjs/toolkit";
import { intervalReducer } from "./intervalSlice/intervalSlice";



export const store = configureStore({
    reducer : {
        buttonIntervals: intervalReducer,
    }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch