
import { useContext, useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const ViewDetailsPost = () => {
  const navigate = useNavigate();
  const [requests,setRequests] =useState([]); 
  const {user} = useContext(AuthContext);
  const post = useLoaderData();
  const  {_id,postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,description,ownerName,ownerEmail} = post 
  
  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios(`https://aid-link-server.vercel.app/request?email=${user?.email}`)
      setRequests(data);
    }
   getData();
  },[])
  
  const handleBeAVolunteer=id=>{
   
    if(numOfVolunteerNeeded===0){
      return  Swal.fire({
        title: "Not Available",
        text: "Already Fill up this post request",
        icon: "error"
      });
    
    }
    if(requests.length>0){
      const match =requests.find(req=>req.postId === id);
      if(match){
        return Swal.fire({
          title: "Already Requested",
          text: "You have Already requested on this post ",
          icon: "error"
        });
      }
      }
    return navigate(`/be-a-volunteer/${id}`);
  }
  return (
    <div 
    data-aos="fade-up"
    data-aos-delay="50"
   data-aos-duration="1000"
    className="bg-base-100" >
       <Helmet>
      <title>AidLink || Details</title>
      </Helmet>
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-24">
    <img src={thumbnail} className="w-full md:w-[40%] md:h-[400px] rounded-lg shadow-2xl" />
    <div className="p-5 ">
      <h1 className="text-5xl font-bold mb-8 text-yellow-400">{postTitle}</h1>
      <h1 className="text-2xl font-bold mb-10 text-cyan-300">{category}</h1>
      <div className="flex justify-between text-sm font-semibold mb-5">
      <p>location: {location}</p>
      <p>Num of Volunteer: {numOfVolunteerNeeded} </p>
      <p>Deadline:  {new Date(deadline).toLocaleDateString()} </p>
     
    </div>
    <div>
      <p><span className="font-bold">Post By: </span>{ownerName}</p>
      <p><span className="font-bold">Email: </span>{ownerEmail}</p>
    </div>
   
      <p className="py-6">{description}</p>
     
      <button onClick={()=>handleBeAVolunteer(_id)} disabled={ownerEmail===user.email} className="btn bg-cyan-500 text-white font-bold">Be a Volunteer</button>
     
     
    </div>
  </div>
</div>

<ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default ViewDetailsPost;