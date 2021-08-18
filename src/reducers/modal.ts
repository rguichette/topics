import { createReducer } from "@reduxjs/toolkit";
import { view_details } from "../actions";


const initialState = {  
        opened: false        
}


const modalReducer = createReducer(initialState, (builder)=>{

    builder.addCase(view_details, (state, action)=>{
    state.opened = action.payload.opened
    })

})


export default modalReducer