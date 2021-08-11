import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

// interface 


function Modal(props:{setModalOpened: any}) {
  // const location = useLocation();
  // let background = location.state
  

  

  return(

   <div onClick={()=>{
   props.setModalOpened(false)
  //  console.log(props)



   }} >
 
     MODAL
   </div>


 



  );
}

export default Modal;
