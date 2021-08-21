import { createAction } from "@reduxjs/toolkit";


export const FETCH_POST_DATA = 'FETCH_POST_DATA';
export const FETCH_POST_SUCCEEDED = 'FETCH_SUCCEEDED'
export const FETCH_POST_FAILED = "FETCH_DATA_FAILED"

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED'
export const FETCH_USER_FAILED = "FETCH_USER_FAILED"

export const FETCH_USER_POSTS_DATA = 'FETCH_USER_POSTS_DATA';
export const FETCH_USER_POSTS_SUCCEEDED = 'FETCH_USER_POSTS_SUCCEEDED'
export const FETCH_USER_POSTS_FAILED ="FETCH_USER_POSTS_FAILED"

export const CALLS_TO_OUTSIDE = "CALLS_TO_OUTSIDE"




export const fetch_user_posts_data = createAction(FETCH_USER_POSTS_DATA, function prepare(page: number, userId){
    return {
        payload:{
            loading: true,
            userId, 
            
        }
    }
})

export const fetch_posts_data = createAction(FETCH_POST_DATA, function prepare(page: number=1, postId?:string){
    // console.log("yell", page)
    return {
        payload:{
            page, 
            postId:postId, 
            loading: true
        }
    }
})


interface Ids{
    userId?:string;
    postId?:string;
}

   export const fetch_posts_succeeded = createAction(FETCH_POST_SUCCEEDED, function prepare(data: any, id?:Ids){
      return {
          payload:{
              data, 
              loading:false,
              id


          }
      }}
      
      )



export const fetch_post_failed = createAction(FETCH_POST_FAILED, function prepare(data: any){
   return {
       payload:{
           data
       }
   }}
   
   )