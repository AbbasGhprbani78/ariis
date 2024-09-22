import { configureStore } from "@reduxjs/toolkit";
import home from "./home";
const store = configureStore({
    reducer: {
        home: home
    }
})

export default store