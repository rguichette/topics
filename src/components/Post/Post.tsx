import React, {useState} from 'react';

import {Modal} from '../Modal'
import { useSelector } from 'react-redux'

import { StyleSheet } from './StyleSheet';

import {Link} from 'react-router-dom'


function Post() {

const [modalOpened, setModalOpened] = useState(false)

function launchModal(){
  console.log("openning...")
setModalOpened(true)
}
  return (
<StyleSheet>
<div >
<div>

   <p onClick={()=>launchModal()}>click me to open</p>

   {modalOpened && <Modal setModalOpened={(val:boolean)=>{
      console.log("val is ",val)
     setModalOpened(val)}}/>}

   {
   

   
   }
   <div className="post-likes"  >
     <p>image</p>
     <p>IC</p>
     <p>44 likes</p>
     
   </div>
   {/* <image sr/> */}
</div>

</div>
</StyleSheet>    

  );
}

export default Post;
