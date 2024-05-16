
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import Swal from "sweetalert2";


const MyVolunteerRequest = ({request,requests,setRequests}) => {
  const {_id,thumbnail,postTitle,location,
    category,deadline} = request;

    const handleCancelRequest = _id=>{
      
      Swal.fire({
        title: "Are you sure?",    
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
         
     axios.delete(`https://aid-link-server.vercel.app/request/${_id}`)
     .then(data=>{
      console.log(data.data);
      if(data.data.deletedCount>0){
            Swal.fire({
            title: "Cancel Successfully",
            text: "Your volunteer request has been cancelled .",
            icon: "success"
          });
          const remainingRequest = requests.filter(req=>req._id !== _id);
          setRequests(remainingRequest);
      }
     
     })
  
        }
      });
  
     
    }




  return (
    <tr   data-aos="fade-up"
    data-aos-delay="500"
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
          <th>
          {/* <Link to={`/craft-details/${craft._id}`}></Link> */}
          <button onClick={()=>handleCancelRequest(_id)} ><IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton></button>
          </th>
         
        </tr>
  );
};

export default MyVolunteerRequest;
