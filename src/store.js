import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./features/users/users.slice";

export const store = configureStore({
    reducer: UserReducer,
    
})