import { Link } from "react-router-dom";


const NeedVolunteerTable = ({post}) => {
  const {_id,thumbnail,postTitle,location,
    category,deadline} = post;
    
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
         <Link to={`/view-details-post/${_id}`}> <button className="btn bg-amber-500 text-white" >Details</button></Link>
          </th>
         
        </tr>
  
  );
};

export default NeedVolunteerTable;
