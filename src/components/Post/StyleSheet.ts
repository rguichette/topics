import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../store'


// interface PropIn{
//     dark: boolean
// }
export const StyleSheet=  styled.div`
background-color: ${() => useSelector((state:State )=>state.theme.dark)
 ? "#342d23" :"green"};
display: flex;
flex-direction: column;




` 