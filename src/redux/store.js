import { configureStore } from "@reduxjs/toolkit";
import home from "./home";
import header from "./header";
import contactus from "./contactus";
import product from "./product";
const store = configureStore({
    reducer: {
        home: home,
        header: header,
        contactus: contactus,
        product: product
    }
})

export default store