import { createReducer } from "@reduxjs/toolkit";
import { view_details } from "../actions";


const initialState = { 
        opened: false,
        owner:null
    }


const modalReducer = createReducer(initialState, (builder)=>{

    builder.addCase(view_details, (state, action)=>{
    state.opened = action.payload.opened
    state.owner = action.payload.owner
    })

})


export default modalReducer