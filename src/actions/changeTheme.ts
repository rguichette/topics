import { createAction } from "@reduxjs/toolkit";

export const SET_DARK = 'SET_DARK';

// export function setTheme(status: boolean){
// return {
//     type: SET_DARK,
  
//         dark: status

// }
// }


export const setTheme  = createAction(SET_DARK, function prepare(dark: boolean){
return {
    payload:{
        dark
    }
}}

)
