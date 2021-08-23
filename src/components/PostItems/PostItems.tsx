import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { view_details } from "../../actions";
import { State } from "../../store";
import { Post } from "../Post";


import Masonry from 'react-masonry-component';



import StyleSheet from "./StyleSheet";


const masonryOptions = {
  transitionDuration: 0
};


function PostItems({posts}:{posts:any})  {

  const style = {
    // marginLeft: "auto",
    // marginRight: "auto",
    // backgroundColor: 'tomato',
    // display: 'flex',
    // flexWrap: 'wrap',
    // textAlign: 'center', 





};


  const dispatch = useDispatch()
  return(



<StyleSheet>

<div className="post-list-container">

{
  posts && posts.data.map((item:any)=>
   { 

    return <Post key={item.id} likes={item.likes} image={item.image} tags={item.tags}
     publishDate={item.publishDate} text={item.text} owner={item.owner} />
    }
  )
}






 </div>
hello posts 
</StyleSheet> 



  );
}



{/* <StyleSheet>

<div className="post-list-container">

{
  posts && posts.data.map((item:any)=>
   { 

    return <Post key={item.id} likes={item.likes} image={item.image} tags={item.tags}
     publishDate={item.publishDate} text={item.text} owner={item.owner} />
    }
  )
}






 </div>
hello posts 
</StyleSheet> */}
export default PostItems;
