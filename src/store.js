import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./slices/mySlice";


const store =  configureStore({
    reducer: {
        myState: myReducer
    }
})


export default store;