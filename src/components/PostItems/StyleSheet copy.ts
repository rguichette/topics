import styled from 'styled-components'


const StyleSheet=  styled.div`
background-color: yellow;

& .post-list-container{

    display: grid;

     grid-template-rows: span 3; 



}

& .main_wrapper{
    background-color: green;
    border: 1px solid red;
    height:auto;
    display: flex;
    flex-wrap: wrap;

};







 ` 
 export default StyleSheet 
