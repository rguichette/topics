import { createReducer } from "@reduxjs/toolkit";
import {fetch_posts_succeeded,fetch_post_failed, fetch_user_posts_data, fetch_posts_data} from "../actions/sagas"


const initialState = { 
        data: null, 
        userId: null, 
        loading: true, 
        postId: null      
}


const postRequestReducer = createReducer(initialState, (builder)=>{


    builder.addCase(fetch_posts_data,(state, action)=>{
console.log("fetch_post_data",action)
    })
    .addCase(fetch_user_posts_data, (state, action)=>{
       state.loading = true;

       
       state.userId = action.payload.userId
    })
    
    
    .addCase(fetch_posts_succeeded, (state, action)=>{
        state.data = action.payload.data;
        state.loading = false;
        console.log("fetching completed: ", action)
        // state.userId = action.payload.userId;

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