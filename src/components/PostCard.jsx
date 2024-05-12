

const PostCard = ({post}) => {
  const {thumbnail,postTitle,
    category,deadline} = post
  return (
    <div className="max-w-xs rounded-md shadow-md ">
    <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">{postTitle}</h2>
        <div className=" ">
        <p>{category}</p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
        </div>
      </div>
      <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900 text-gray-900 text-gray-900 text-gray-900 hover:bg-cyan-600">View Details</button>
    </div>
  </div>
  );
};

export default PostCard;