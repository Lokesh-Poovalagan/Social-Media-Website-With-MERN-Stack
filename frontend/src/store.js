import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/postSlice"
import postsReducer from "./slice/postsSlice"
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    postState:postReducer,
    postsState:postsReducer
})

const store = configureStore({
    reducer,
    middleware: [thunk].forEach(ee=>{})
})

export default store