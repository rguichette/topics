import React from 'react';
import { useSelector } from 'react-redux';
import { Reducer } from 'redux';

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
  posts ==null ? null : posts.map((item:any)=>
    <Post/>
  )
}

 </div>
  

</div>
 </StyleSheet> 
  );
}

export default Home


