import { configureStore } from "@reduxjs/toolkit";
import home from "./home";
import header from "./header";
import contactus from "./contactus";
import product from "./product";
import aboutus from "./aboutus";
import articles from "./articles";
import article from "./article";
import category from "./category";
import getIp from './getIp'
const store = configureStore({
    reducer: {
        home: home,
        header: header,
        contactus: contactus,
        product: product,
        aboutus: aboutus,
        articles: articles,
        article: article,
        category: category,
        getIp: getIp
    }
})

export default store