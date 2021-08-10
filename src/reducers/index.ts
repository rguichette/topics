import { createReducer } from "@reduxjs/toolkit";
import { setTheme } from "../actions/changeTheme"



const initialTheme = {dark: false}

export const themeReducer = createReducer(initialTheme, (builder)=>{
    builder.addCase(setTheme, (state, action)=>{
        // //logic 
        
        // console.log("action", action.payload.dark)
        state.dark = action.payload.dark
    })
})


