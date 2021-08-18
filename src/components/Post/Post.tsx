
import {Modal} from '../Modal'
import { useDispatch, useSelector } from 'react-redux'

import { StyleSheet } from './StyleSheet';

import { State } from '../../store';
import { view_details } from '../../actions';

interface IPost{
  likes:number, 
  tags:string[],
  image:string,
  publishDate:string,
  text: string, 
  owner?:any
}

function Post(item:IPost) {
const dispatch = useDispatch()


  return (
<StyleSheet>
<div onClick={()=>dispatch(view_details(true, item.owner))}>
  <img src={item.owner.picture}/>
    <p>{item.owner.firstName} {item.owner.lastName}</p>
     
     <p>IC</p>
     <p>{item.likes}</p>
     
   <img src={item.image} alt=""/>
</div>

</StyleSheet>    

  );
}

export default Post;
