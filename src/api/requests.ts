import { call, all, put } from "redux-saga/effects";

import { fetch_data, fetch_succeeded } from '../actions/sagas';
import axios, { AxiosResponse } from 'axios';


const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '61159354de303959d867e7f7';

const fake = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"

function fetch_data_helper(){
  return  axios.get(fake, { headers: { 'app-id': APP_ID } }).then(data=>data.data)
}
export function* fetch_data_saga(){

    try {
       const data:AxiosResponse | null | void = yield call(fetch_data_helper);
       yield put(fetch_succeeded(data))
    } catch (e) {
    }
 }

 