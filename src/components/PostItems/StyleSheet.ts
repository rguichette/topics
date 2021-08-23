import styled from 'styled-components'

const StyleSheet=  styled.div`

margin-top: 20px;
border-top: 1px solid #ccc;   

@media(min-width: 768px){
 padding-top: 50px;
}



.post-list-container{
    columns: 5 200px;
  column-gap: 1.5rem;
  width: 90%;
  margin: 0 auto;
  .poster{
    width: 150px;
    margin: 0 1.5rem 1.5rem 0;
    display: inline-block;
    width: 100%; 
  }



}


 ` 
 export default StyleSheet 
