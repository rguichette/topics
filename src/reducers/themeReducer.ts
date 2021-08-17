import { createReducer, createSlice } from "@reduxjs/toolkit"
import { setTheme } from "../actions/changeTheme"

const initialTheme = {dark: false}

const themeReducer= createReducer(initialTheme, (builder)=>{
    builder.addCase(setTheme, (state, action)=>{
        
        state.dark = !action.payload.dark
    })
})


export default themeReducer;