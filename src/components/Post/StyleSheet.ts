// import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'


export const StyleSheet =  styled.div`

display: flex;
flex-direction: column;
background-color: #eee;
min-width: 250px;
border: 1px solid red;
/* height: 250px; */
max-width: 250px;
margin: 20px;
border-radius: 8px;

& .info{
    /* background-color:yellow; */

    display: flex;
    flex-direction:row;  
    margin-bottom: .5em;
    margin-top: .5em;
    
   justify-content:space-around;
   padding: 0 1rem;

   & p{
       /* background-color: white; */
       width: 100%;
        text-align: center;
   }



}

& #post_img{
    width: 100%;
    
}
& #profile_img{
    width: 20%; 
    border-radius : 50px;
    border: 2px solid blue;
    
    /* display: flex; */

}

& .post_comment_like{
    display: flex;
    flex-direction: row;
    /* background-color: #fff; */
    margin-right: auto;
    padding: 0 .6rem;



    & #likes{
        /* background-color: red; */
        margin-left: auto; 

}

  
}

` 