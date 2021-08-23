// import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import { useLocation } from 'react-router-dom'


export const StyleSheet =  styled.div`

border: 1px solid black;
margin-top: 18px;

& .info{
  

    display: flex;
    flex-direction:row;  

   & p{
       background-color: white;
       width: 100%;
        text-align: center;
   }



}

& #post_img{
    width: 100%;
    
}
& #profile_img{
    width: 50px; 
    border-radius : 50px;
    border: 2px solid blue;
    
    /* display: flex; */

}

& .post_comment_like{
    display: flex;
    flex-direction: row;
    /* background-color: #fff; */
    /* margin-right: auto;
    padding: 0 .6rem; */



    & #likes{
        /* background-color: red; */
        margin-left: auto; 

}



  
}

` 