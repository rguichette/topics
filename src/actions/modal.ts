import { createAction } from "@reduxjs/toolkit";

export const VIEW_DETAILS = 'VIEW_DETAILS';

// interface IOwner{
//     owner: any : null
// }


export const view_details  = createAction(VIEW_DETAILS, function prepare(opened: boolean=false, owner:any = null){
return {
    payload:{
        opened,
        owner
    }
}}

)

// export const close_details = createAction(VIEW_DETAILS, function prepare(opened: boolean=false, owner:any = null){
//     return {
//         payload:{
//             owner
//         }
//     }}
    
//     )