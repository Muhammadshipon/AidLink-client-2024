import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const UpdatePost = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const post = useLoaderData();
  const { _id, postTitle, thumbnail, location, numOfVolunteerNeeded, category, description } = post;

  const handleUpdatePost = async (e)=>{
    e.preventDefault();

  
    
    
   

    const form = e.target;
    
    const ownerName = user.displayName;
    const ownerEmail = user.email;
    const postTitle = form.postTitle.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const numOfVolunteerNeeded = parseInt(form.numOfVolunteerNeeded.value);
    const deadline = startDate;
    const category = form.category.value;
    const description = form.description.value;
    

    // console.log(postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,stockStatus,customization,description)
    const updatedPost = {postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,description,ownerName,ownerEmail}
    console.log(updatedPost);

    try {
      const { data } = await axios.put(
        `https://aid-link-server.vercel.app/posts/${_id}`,
        updatedPost
      )
      console.log(data)
      Swal.fire({
        title: "Post Updated Successfully",
        text: "Your volunteer need post updated Successfully",
        icon: "success"
      });
      form.reset();
      navigate("/manage-my-post")
    } catch (err) {
      console.log(err)
     
    }
  

   
   
  }


  return (
    <div 
    data-aos="fade-up"
    data-aos-delay="50"
   data-aos-duration="1000"
    
    onSubmit={handleUpdatePost} className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000">
       <Helmet>
      <title>AidLink || Update</title>
      </Helmet>
      <form className="md:w-2/3 px-5 mb-10">
        {/* container  */}
        <h1 className="text-3xl font-bold text-center my-5 text-yellow-400">Update Your Need Volunteer Post</h1>
        <div className="flex flex-col md:flex-row  gap-10">
          {/* left side  */}
          <div className="md:w-1/2 space-y-4">
            <div>
              <label className="block mb-2 text-sm">Post Title</label>
              <input defaultValue={postTitle}  required type="text" name="postTitle" placeholder="Post Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Thumbnail</label>
              <input defaultValue={thumbnail}  required type="text" name="thumbnail" placeholder="thumbnail Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Location</label>
              <input defaultValue={location}  required type="text" name="location" placeholder="Location" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">No. of volunteers needed</label>
              <input defaultValue={numOfVolunteerNeeded}  required  type="number
    " name="numOfVolunteerNeeded" placeholder="No. of volunteers needed" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Deadline</label>
              <DatePicker
       className="p-2 border rounded-lg bg-slate-200"
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
            </div>

           



          </div>

          {/* right side  */}
          <div className="md:w-1/2 space-y-5 mt-7">

            <select defaultValue={category}  name="category" className="select select-bordered w-full ">
              <option  selected>Category</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Social Service</option>
              <option>Animal Welfare</option>
            </select>
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input disabled required type="text" name="name" defaultValue={user.displayName}  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input  disabled  required type="text" name="email" defaultValue={user.email}  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>

            <br />
            <div>
              <label htmlFor=""><h3>Short Description</h3></label>
              <textarea defaultValue={description}  name="description" rows="4" className="w-full border-2 bg-gray-100 mt-2 rounded-xl placeholder:p-1" placeholder="short description..."></textarea>
            </div>

           

          </div>

        </div>
        <div className=" my-5">
          <input className="btn w-full bg-yellow-300 font-bold" type="submit" value="Update" />

        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
