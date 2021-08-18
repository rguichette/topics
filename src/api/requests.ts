import { call, put } from "redux-saga/effects";

import { fetch_post_succeeded } from '../actions/sagas';
import axios, { AxiosResponse } from 'axios';


const BASE_URL = 'https://dummyapi.io/data/v1/post?page=2&limit=10';
const APP_ID = '61159354de303959d867e7f7';

function fetch_data_helper(){
  return  axios.get(BASE_URL, { headers: { 'app-id': APP_ID } }).then(res=>res.data).catch(e =>{console.log(e)})
}
export function* fetch_data_saga(){
       const data:AxiosResponse | null | void = yield call(fetch_data_helper);
       yield put(fetch_post_succeeded(data))
   
 }

 