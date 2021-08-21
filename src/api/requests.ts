// import { call, put, takeEvery, all } from "redux-saga/effects";

// import { fetch_post_succeeded } from '../actions/sagas';
// import axios, { AxiosResponse } from 'axios';


// // const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';
// const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';
// const APP_ID = '61159354de303959d867e7f7';

// enum endpoints {
//   post="post",
//   user="user"
// }




// function fetch_data_helper(endpoint:endpoints, page:number, limit:number){
//   return null
  
//   // axios.get(`${BASE_URL}/${endpoint}`, { headers: { 'app-id': APP_ID } }).then(res=>res.data).catch(e =>{console.log(e)})
// }
// export function* fetch_data_saga(){
//        const data:AxiosResponse | null | void = yield call(fetch_data_helper, endpoints.post, 2, 10);
//        yield put(fetch_post_succeeded(data))
   
//  }

// interface requestParams {
//   page:number, 
//   id?:string
// }

// export function fetch_user_posts_helper(params:requestParams, limit:number=10 ){
// const BASE_URL = `https://dummyapi.io/data/v1/post`;
// let URL;
// if(params.id){
//   URL= `BASE_URL/${params.id}` 
// }
// if(params.page){
//   URL+=`?page=${params.page}`
// }


// console.log("page: ", params.page, "limit: ", limit, "id: ", params.id )



// // yield put(fetch_post_succeeded(data))



// }


// fetch_user_posts_helper({page:1, id:"1234"})


//  export function* fetch_user_posts(action:any){
//     yield call(fetch_user_posts_helper, {page:1}, 10)
//  }
 

//  export function* fetch_user_posts_saga(){
// //take every someethng 

// yield fetch_user_posts()
// }



//  ////////////////////////////////////////////////////////////////////////////////////////////////
// enum Method{ 
// get= "get", 
// }

// enum startingPoint{
// COMMENET="/comment",
// USER="/user",
// POST="/post"
// }
// interface Endpoints{
// begin: startingPoint;
// // page: number;
// limit?: number;
// id?:string,
// end?: startingPoint;
// }






// // outside_calls_helper(Method.get, { begin:startingPoint.POST, id:"123948", end:startingPoint.COMMENET,} )
// // outside_calls_helper(Method.get, {begin:startingPoint.USER, id: "13123134", end:startingPoint.COMMENET})
// // outside_calls_helper(Method.get, { begin:startingPoint.POST, id:"339280", end: startingPoint.COMMENET} )





// // export function* mySaga2():any {
// //   const [customers, products] = yield all([
// //     call(fetchCustomers),
// //     call(fetchProducts)
// //   ])
// // }

import {fetch_data_saga} from './postRequests'
export {fetch_data_saga}

 