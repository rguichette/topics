import { AnyAction, createReducer, createSlice, Reducer } from "@reduxjs/toolkit";
import { setTheme } from "../actions/changeTheme"

import themeReducer from "./themeReducer"
import requestReducer from "./requestReducer"







const allReducers = {
    themes:themeReducer,
    requests:requestReducer,
}

export default allReducers

// function combineRedcers(themeReducer: Reducer<{ dark: boolean; }, AnyAction>) {
//     throw new Error("Function not implemented.");
// }

