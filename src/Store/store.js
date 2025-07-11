import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Store/todoSlice"

const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})


export default store