import { useSelector } from 'react-redux';

import StyleSheet from "./StyleSheet"

import {Post} from '../../components/Post';
import { State } from '../../store';
import { Modal } from '../../components/Modal';



 function Home() {
  let posts:any =useSelector((state:State)=>state.requests.data)
  const isModalOpened = useSelector((state:State)=>state.modal.opened)
  const ownerClicked = useSelector((state:State)=>state.modal.owner)

  return (
<StyleSheet>
<div >

 <div className="post-list-container">
   {console.log("posts",posts)}
{/* <Post/> */}

{
  posts ==null ? null : posts.data.map((item:any)=>
   { 

    return <Post key={item.id} likes={item.likes} image={item.image} tags={item.tags}
     publishDate={item.publishDate} text={item.text} owner={item.owner} />
    }
  )
}
{ isModalOpened? <Modal owner={ownerClicked} /> : null}


 </div>
  

</div>
 </StyleSheet> 
  );
}

export default Home


