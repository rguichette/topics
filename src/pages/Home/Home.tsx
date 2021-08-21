import { useDispatch, useSelector } from 'react-redux';

import StyleSheet from "./StyleSheet"

import {Post} from '../../components/Post';
import { State } from '../../store';
import { Modal } from '../../components/Modal';
import { fetch_posts_data } from '../../actions';
import { useEffect } from 'react';
import { fetch_user_posts_data } from '../../actions/sagas';



 function Home() {
  let posts:any =useSelector((state:State)=>state.requests.data)
  const isModalOpened = useSelector((state:State)=>state.modal.opened)
  const ownerClicked = useSelector((state:State)=>state.modal.owner)
  
  
  let dispatch = useDispatch()

  // useEffect(()=>{dispatch(fetch_post_data(1,"helloID"))}, [dispatch])
  // useEffect(()=>{dispatch(fetch_user_posts_data(1,"helloID"))}, [dispatch])
  useEffect(()=>{dispatch(fetch_posts_data(1))}, [dispatch])



  
  return (
<StyleSheet>
<div >

 <div className="post-list-container">
   {console.log("posts",posts)}
{/* <Post/> */}

{
  posts && posts.data.map((item:any)=>
   { 

    return <Post key={item.id} likes={item.likes} image={item.image} tags={item.tags}
     publishDate={item.publishDate} text={item.text} owner={item.owner} />
    }
  )
}

{console.log(posts)}



{ isModalOpened? <Modal owner={ownerClicked} /> : null}


 </div>
  

</div>
 </StyleSheet> 
  );
}

export default Home


