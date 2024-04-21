
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CounterSlice from "./CounterSlice";

const store=configureStore({
    reducer:{
        cart:CartSlice,
        counter:CounterSlice
    }
})
export default store;