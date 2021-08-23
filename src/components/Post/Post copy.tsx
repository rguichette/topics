
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


<div >
  {
    item.owner && <div className="info" onClick={()=>dispatch(view_details(true, item.owner))} ><img id="profile_img" src={item.owner.picture}/> <p>{item.owner.firstName} {item.owner.lastName}</p></div>  
  }
</div>

  <div className="main_wrapper">

    <img id="post_img" src={item.image} alt=""/>
  
      <div className="post_comment_like">
          <p id="comments">IC</p>
          <p id="likes">{item.likes}</p>
      </div>  
   </div>
     


</StyleSheet>    

  );
}

export default Post;
