
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetch_posts_data, fetch_user_posts_data } from "../../actions/sagas";
import { Post } from "../../components/Post";
import { State } from "../../store";
import StyleSheet from "./StyleSheet"

interface parameters{
  userId:string
}
 function Profile({props}:any) {
   const dispatch = useDispatch()

 useEffect(()=>{dispatch(fetch_user_posts_data(1, userId))}, [dispatch])

 
let posts:any =useSelector((state:State)=>{return {
data: state.requests.data,
loading: state.requests.loading
}})





   let {userId}:parameters = useParams()
   console.log("LOADING: ", posts.loading)
//  console.log("user id from profile is: ", userId)
//  console.log("user posts are.... ", posts)


  return (
<StyleSheet>
<div >
welcome....
<div className="profile-info">

</div>
{console.log("query is: ",userId)}
{/* {console.log("posts is: ",posts.data)} */}


<div className="more-posts">
  {
    posts.loading ? <div>LOADING...</div> : <div> { 
      // console.log("profile posts",posts.data.data)
      posts.data.data.map((item:any)=>{
        console.log(item)
      return <Post key={item.id} likes={item.likes} image={item.image} tags={item.tags}
     publishDate={item.publishDate} text={item.text} />

   
    })
  
  }

      
    </div>


  }
{/* {
posts && posts.map((item:any)=>{
  return <div>hello there</div>
})
} */}
</div>




  

</div>
 </StyleSheet> 
  );
}

export default Profile


function useQuery() {
  throw new Error("Function not implemented.");
}

