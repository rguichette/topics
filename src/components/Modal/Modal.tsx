import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { view_details } from "../../actions";


import StyleSheet from "./StyleSheet";

interface IOwner{
  id:string
title:string
firstName:string
lastName:string
picture:string
}

function Modal({owner}:{owner:any})  {
  
  const dispatch = useDispatch()
  return(
<StyleSheet>
  <div>
<div className="main-content">main content</div>
{ owner && <Link to={`full_profile/${owner.id}`} onClick={()=>{ dispatch(view_details(false))}} >full profile</Link>



}
<p>{owner.firstName} {owner.lastName}</p>
<img src={owner.picture}/>

{console.log("owner is:", owner.firstName, owner.lastName)}
<div>
 Gender: female<br/>

Date of birth: Apr 30 1996<br/>
Register date: Jun 21 2021 
</div>

<div className='contact'>
  Email: sara.andersen@example.com<br/>
  Phone: 92694011<br/>
</div>

<address>
Address<br/>
State: Nordjylland<br/>
Street: 9614, SÃ¸ndermarksvej<br/>
City: Kongsvinger<br/>
Country: Denmark<br/>
Timezone: -9:00
</address>

   <button className="btn-close" onClick={()=>{ dispatch(view_details(false))}} > CLOSE</button>


</div>  
</StyleSheet>
 



  );
}

export default Modal;
