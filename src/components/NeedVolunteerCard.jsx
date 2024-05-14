import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const NeedVolunteerCard = ({post}) => {
  const navigate = useNavigate();
  const {_id,thumbnail,postTitle,
    category,deadline,numOfVolunteerNeeded} = post;

    const handleBeAVolunteer=id=>{
      if(numOfVolunteerNeeded===0){
        return  Swal.fire({
          title: "Not Available",
          text: "Already Fill up this post request",
          icon: "error"
        });
      
      }
      return navigate(`/be-a-volunteer/${id}`);
    }
  return (
    <div className="max-w-xs rounded-md shadow-md mx-auto ">
    <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{postTitle}</h2>
        <div className=" ">
        <p>{category}</p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
          <p>No. of volunteer needed : {numOfVolunteerNeeded}</p>
        </div>
      </div>
   <Link to={`/view-details-post/${_id}`}>
   <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900 text-gray-900 text-gray-900 text-gray-900 hover:bg-cyan-600">View Details</button>
   </Link>
   <button onClick={()=>handleBeAVolunteer(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-400 text-gray-900 text-gray-900 text-gray-900 text-gray-900 hover:bg-cyan-600">Be A Volunteer</button>
    </div>
  </div>
  );
};

export default NeedVolunteerCard;