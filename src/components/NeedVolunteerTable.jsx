import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const NeedVolunteerTable = ({post}) => {
  const navigate = useNavigate();
  const {_id,thumbnail,postTitle,location,
    category,deadline,numOfVolunteerNeeded
  } = post;
    
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
    <tr>
        
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
          
          <button onClick={()=>handleBeAVolunteer(_id)}  className="btn bg-cyan-500 text-white" >Be A Volunteer</button>
          </th>
         
        </tr>
  
  );
};

export default NeedVolunteerTable;
