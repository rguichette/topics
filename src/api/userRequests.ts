import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";

import { fetch_posts_succeeded } from '../actions/sagas';
import axios, { AxiosResponse } from 'axios';


import { FETCH_POST_DATA } from "../actions/sagas";



// // const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';
// const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';


const APP_ID = '61159354de303959d867e7f7';
const BASE_URL = `https://dummyapi.io/data/v1/post`;


function* fetch_helper(action:any){
  if(action.payload.userId){
    console.log("fetching posts from user",action.payload.userId )
  }
    //fetching is done here 
    console.log("hey from", action)

console.log("hello world from userReq saga")

}


function* request_user_posts(){
 yield takeLatest(FETCH_POST_DATA, fetch_helper )
}


//move below lines to index file 

export function* fetch_data_saga():any {
   yield all([
    call(request_user_posts),

  ])
}
