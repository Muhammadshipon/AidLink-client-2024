import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";


const VolunteerNeedsNow = () => {
  const [posts,setPost] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios('http://localhost:9000/posts')
      setPost(data);
    }
   getData();
  },[])
  console.log(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {
        posts.map(post=><PostCard key={post._id} post={post}></PostCard>)
      }
    </div>
   
  );
};

export default VolunteerNeedsNow;