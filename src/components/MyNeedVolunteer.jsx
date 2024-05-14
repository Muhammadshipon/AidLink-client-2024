import axios from "axios";
import Swal from "sweetalert2";


const MyNeedVolunteer = ({post,posts,setPosts}) => {
   const {_id,thumbnail,postTitle,location,
    category,deadline} = post;

    const handleDeletePost = _id=>{
      
      Swal.fire({
        title: "Are you sure?",    
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "cancel"
      }).then((result) => {
        if (result.isConfirmed) {
         
     axios.delete(`http://localhost:9000/posts/${_id}`)
     .then(data=>{
      console.log(data.data);
      if(data.data.deletedCount>0){
            Swal.fire({
            title: "Delete Successfully",
            text: "Your Need volunteer post has been deleted .",
            icon: "success"
          });
          const remainingPosts = posts.filter(p=>p._id !== _id);
          setPosts(remainingPosts);
      }
     
     })
  
        }
      });
  
     
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
          <th>
          {/* <Link to={`/craft-details/${craft._id}`}></Link> */}
          <button className="btn btn-info btn-xs text-white">Update</button>
          </th>
          <th>
          {/* <Link to={`/craft-details/${craft._id}`}></Link> */}
          <button onClick={()=>handleDeletePost(_id)} className="btn btn-error btn-xs text-white">delete</button>
          </th>
        </tr>
  );
};

export default MyNeedVolunteer;
