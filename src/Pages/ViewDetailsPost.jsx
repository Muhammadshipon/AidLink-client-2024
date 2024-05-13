
import { useContext } from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const ViewDetailsPost = () => {
  const {user} = useContext(AuthContext);
  const post = useLoaderData();
  const  {_id,postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,description,ownerName,ownerEmail} = post 
  
  return (
    <div className="bg-base-100" >
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
      <Link to={`/be-a-volunteer/${_id}`}>
      <button disabled={ownerEmail===user.email} className="btn bg-cyan-500 text-white font-bold">Be a Volunteer</button>
      </Link>
     
    </div>
  </div>
</div>

<ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default ViewDetailsPost;