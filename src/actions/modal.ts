import { createAction } from "@reduxjs/toolkit";

export const VIEW_DETAILS = 'VIEW_DETAILS';



export const view_details  = createAction(VIEW_DETAILS, function prepare(opened: boolean){
return {
    payload:{
        opened
    }
}}

)