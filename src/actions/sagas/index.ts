import { createAction } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED'
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED"


export const fetch_data = createAction(FETCH_DATA, function prepare(data: any){
    return {
        payload:{
            data: null
        }
    }
})



   export const fetch_succeeded = createAction(FETCH_SUCCEEDED, function prepare(data: any){
      return {
          payload:{
              data
          }
      }}
      
      )



export const fetch_failed = createAction(FETCH_DATA_FAILED, function prepare(data: any){
   return {
       payload:{
           data
       }
   }}
   
   )