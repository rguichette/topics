import { createAction } from "@reduxjs/toolkit";
export const FETCH_POST_DATA = 'FETCH_DATA';
export const FETCH_POST_SUCCEEDED = 'FETCH_SUCCEEDED'
export const FETCH_POST_FAILED = "FETCH_DATA_FAILED"

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED'
export const FETCH_USER_FAILED = "FETCH_USER_FAILED"

export const FETCH_USER_POSTS_DATA = 'FETCH_USER_POSTS_DATA';
export const FETCH_USER_POSTS_SUCCEEDED = 'FETCH_USER_POSTS_SUCCEEDED'
export const FETCH_USER_POSTS_FAILED ="FETCH_USER_POSTS_FAILED"


export const fetch_post_data = createAction(FETCH_POST_DATA, function prepare(data: any){
    return {
        payload:{
            data: null
        }
    }
})



   export const fetch_post_succeeded = createAction(FETCH_POST_SUCCEEDED, function prepare(data: any){
      return {
          payload:{
              data
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