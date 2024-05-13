

const MyNeedVolunteer = ({post}) => {
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
          <button className="btn btn-info btn-xs text-white">Update</button>
          </th>
          <th>
          {/* <Link to={`/craft-details/${craft._id}`}></Link> */}
          <button className="btn btn-error btn-xs text-white">delete</button>
          </th>
        </tr>
  );
};

export default MyNeedVolunteer;