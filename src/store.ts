import {configureStore} from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import { fetch_data_saga } from './api/requests';

import reducer from './reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


export const store =  configureStore({
 reducer, 
  middleware: defaultMiddleware => defaultMiddleware().concat(sagaMiddleware)
},


)

  sagaMiddleware.run(fetch_data_saga);


export default store

export type State = ReturnType<typeof store.getState> 



