import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { view_details } from "../../actions";


import StyleSheet from "./StyleSheet";


function Modal() {

  const dispatch = useDispatch()
  
  return(
<StyleSheet>
  <div>
<div className="main-content">main content</div>

<Link to="full_profile" >full profile</Link>


   <button className="btn-close" onClick={()=>{ dispatch(view_details(false))}} >


    CLOSE
   </button>


</div>  
</StyleSheet>
 



  );
}

export default Modal;
