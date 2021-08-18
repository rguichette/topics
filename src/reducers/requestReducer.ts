import { createReducer } from "@reduxjs/toolkit";
import {fetch_post_succeeded,fetch_post_failed} from "../actions/sagas"


const initialState = { 
        data: null       
}


const postRequestReducer = createReducer(initialState, (builder)=>{

    builder.addCase(fetch_post_succeeded, (state, action)=>{
        state.data = action.payload.data
    })
    .addCase(fetch_post_failed,(state, action)=>{
        //TODO
        console.log("fetching...")
    } )
})



// const userRequestReducer  = createReducer(initialState, (builder)=>{
//     builder.addCase(fetch_succeeded, (state, action)=>{
//         state.data = action.payload.data
//     })
// })
export default postRequestReducer