import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import StyleSheet from "./StyleSheet";

function Modal(props:{setModalOpened: any}) {

  return(
<StyleSheet>
  <div>
<div className="main-content">main content</div>

<Link to="full_profile">full profile</Link>
   <button className="btn-close" onClick={()=>{
   props.setModalOpened(false)
   }} >
    CLOSE
   </button>
</div>  
</StyleSheet>
 



  );
}

export default Modal;
