
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
  ownerFirstName:string,
  ownerLastName:string,
  ownerId:string
}

function Post(item:IPost) {
const isModalOpened = useSelector((state:State)=>state.modal.opened)
const dispatch = useDispatch()


  return (
<StyleSheet>
<div onClick={()=>dispatch(view_details(!isModalOpened))}>

{console.log("is it opened?",isModalOpened)}
   <div className="post-likes"   >
     <p>{item.ownerFirstName} {item.ownerLastName}</p>
     <p>IC</p>
     <p>{item.likes}</p>
     
   </div>
   <img src={item.image} alt=""/>
{/* {isModalOpened} */}
  { isModalOpened && <Modal/>}
</div>

</StyleSheet>    

  );
}

export default Post;
