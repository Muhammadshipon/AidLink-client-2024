import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const NeedVolunteerTable = ({post}) => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const {_id,thumbnail,postTitle,location,
    category,deadline,numOfVolunteerNeeded,ownerEmail
  } = post;
    
  const handleBeAVolunteer=id=>{
    if(numOfVolunteerNeeded===0){
      return  Swal.fire({
        title: "Not Available",
        text: "Already Fill up this post request",
        icon: "error"
      });
    
    }

    if(ownerEmail===user?.email){
      return  Swal.fire({
        title: "Not Exist",
          text: "You can not request your own post",
          icon: "error"
      });
    
    }
    return navigate(`/be-a-volunteer/${id}`);
  }
  return (
    <tr   data-aos="fade-up"
    data-aos-delay="200"
   data-aos-duration="1000">
        
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{postTitle}</div>
                <div className="text-sm opacity-50">{category}</div>
              </div>
            </div>
          </td>
         
          <td>{new Date(deadline).toLocaleDateString()}</td>

          <td>
            {location}
          </td>
          <td className="text-center">
            {numOfVolunteerNeeded
             }
          </td>
          <th>
          
         <Link to={`/view-details-post/${_id}`}> <button className="btn bg-amber-500 text-white" >Details</button></Link>
          </th>
          <th>
          
          <button disabled={ownerEmail===user?.email} onClick={()=>handleBeAVolunteer(_id)}  className="btn bg-cyan-500 text-white" >Be A Volunteer</button>
          </th>
         
        </tr>
  
  );
};

export default NeedVolunteerTable;
