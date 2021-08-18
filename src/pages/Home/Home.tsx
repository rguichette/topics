import { useSelector } from 'react-redux';

import StyleSheet from "./StyleSheet"

import {Post} from '../../components/Post';
import { State } from '../../store';



 function Home() {
  let posts:any =useSelector((state:State)=>state.requests.data)

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
     publishDate={item.publishDate} text={item.text} ownerFirstName={item.owner.firstName} ownerLastName={item.owner.lastName} ownerId={item.owner.id} />
    }
  )
}

 </div>
  

</div>
 </StyleSheet> 
  );
}

export default Home


