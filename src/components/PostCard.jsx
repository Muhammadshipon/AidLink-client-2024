import { Link } from "react-router-dom";


const PostCard = ({post}) => {
  const {_id,thumbnail,postTitle,
    category,deadline} = post
  return (
    <div
    
    data-aos="fade-up"
   
         data-aos-duration="1000"
    
    className="max-w-xs rounded-md shadow-md ">
    <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2 min-h-[160px]">
        <h2 className="text-3xl font-semibold tracking-wide">{postTitle}</h2>
        <div className=" ">
        <p>{category}</p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
        </div>
      </div>
   <Link to={`/view-details-post/${_id}`}>
   <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900 text-gray-900 text-gray-900 text-gray-900 hover:bg-cyan-600">View Details</button>
   </Link>
    </div>
  </div>
  );
};

export default PostCard;