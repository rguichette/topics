import { call, put, takeEvery, all, takeLatest } from "redux-saga/effects";

import { fetch_posts_succeeded, FETCH_USER_POSTS_DATA } from '../actions/sagas';
import axios, { AxiosResponse } from 'axios';


import { FETCH_POST_DATA } from "../actions/sagas";



// // const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';
// const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';


const APP_ID = '61159354de303959d867e7f7';
const BASE_URL = `https://dummyapi.io/data/v1`;
const LIMIT = 10;


// function makePostRequest(URL:string){
//   return axios.get(URL, { headers: { 'app-id': APP_ID } }).then(res =>res.data) 
// }


function* fetch_helper(action:any){
  console.log("making call from helper")
  let URL =""
  if(action.payload.userId){
    //get all posts from the specific USER
    console.log("fetching posts from user",action.payload.userId )
    URL= BASE_URL + `/user/${action.payload.userId}/post`
  }else if (action.payload.postId){
    //get more info on specific POST
    console.log("fetching details on post",action.payload.postId )
    URL = BASE_URL + `/post/${action.payload.postId}`
  }else{
    console.log("fetching normal post")
    URL = BASE_URL + `/post`
  }
    console.log("final Link ", URL);
    URL+=`?limit=${LIMIT}`


 let data:AxiosResponse | null | void = yield axios.get(URL, { headers: { 'app-id': APP_ID } }).then(res =>res.data) 
  console.log("url is, ", URL)

  // if(!action.payload.userId){
       yield put(fetch_posts_succeeded(data))
  }
//   else{
// console.log("the data is ",action)

//   }



// }


function* request_user_posts(){
yield takeLatest(FETCH_POST_DATA, fetch_helper )
yield takeLatest(FETCH_USER_POSTS_DATA, fetch_helper )

}


//move below lines to index file 

export function* fetch_data_saga():any {
   yield all([
    call(request_user_posts),

  ])
}
