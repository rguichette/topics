import { createReducer } from "@reduxjs/toolkit";
import {fetch_succeeded,fetch_failed} from "../actions/sagas"


const initialState = { 
        data: null       
}


const requestReducer = createReducer(initialState, (builder)=>{

    builder.addCase(fetch_succeeded, (state, action)=>{
        state.data = action.payload.data
    })
    .addCase(fetch_failed,(state, action)=>{
        //TODO
        console.log("fetching...")
    } )
})


export default requestReducer