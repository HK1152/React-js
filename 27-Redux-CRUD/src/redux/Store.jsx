import { configureStore } from "@reduxjs/toolkit";
import ABC from "./CounterSlice"

import X from "./TaskSlice"
export const store=configureStore({
    reducer:{
        // Counter:ABC
        tasks:X
    }
});


