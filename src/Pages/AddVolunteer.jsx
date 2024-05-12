import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AddVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
   const {user} = useContext(AuthContext);
   console.log(user)

  const handleAddVolunteer = async (e)=>{
    e.preventDefault();

  
    
    
   

    const form = e.target;
    
    const ownerName = user.displayName;
    const ownerEmail = user.email;
    const postTitle = form.postTitle.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const numOfVolunteerNeeded = form.numOfVolunteerNeeded.value;
    const deadline = startDate;
    const category = form.category.value;
    const description = form.description.value;
    

    // console.log(postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,stockStatus,customization,description)
    const newPost = {postTitle,thumbnail,location,numOfVolunteerNeeded,deadline,category,description,ownerName,ownerEmail}
    console.log(newPost);

    try {
      const { data } = await axios.post(
        `http://localhost:5000/posts`,
        newPost
      )
      console.log(data)
      Swal.fire({
            title: "Post Added Successfully",
            text: "Your volunteer need post  added Successfully",
            icon: "success"
          });
          form.reset();
      // navigate('/my-posted-jobs')
    } catch (err) {
      console.log(err)
    }
  

    // fetch('https://eco-chic-crafts-server.vercel.app/crafts',{
    //   method:'POST',
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body:JSON.stringify(newItem)
    // }).then(res=>res.json())
    // .then(data=>{
    //   console.log(data);
    //   
    //  
    // })
  }
  return (
    <div className="flex justify-center items-center" data-aos="fade-up"  data-aos-duration="1000">
    <form onSubmit={handleAddVolunteer} className="md:w-2/3 px-5 mb-10">
        {/* container  */}
        <h1 className="text-3xl font-bold text-center my-5 text-yellow-400">Add Your Need Volunteer Post</h1>
    <div className="flex flex-col md:flex-row  gap-10">
         {/* left side  */}
      <div className="md:w-1/2 space-y-4">
      <div>
    <label className="block mb-2 text-sm">Post Title</label>
    <input required type="text" name="postTitle"  placeholder="Post Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Thumbnail</label>
    <input required type="text" name="thumbnail"  placeholder="thumbnail Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">Location</label>
    <input required type="text" name="location"  placeholder="Location" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>
      <div>
    <label className="block mb-2 text-sm">No. of volunteers needed</label>
    <input required type="text" name="numOfVolunteerNeeded"  placeholder="No. of volunteers needed" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
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

      <select name="category" className="select select-bordered w-full ">
  <option disabled selected>Category</option>
  <option>Healthcare</option>
  <option>Education</option>
  <option>Social Service</option>
  <option>Animal Welfare</option>
      </select>
      <div>
    <label className="block mb-2 text-sm">Name</label>
    <input required type="text" name="name" defaultValue={user.displayName} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>

    <div>
    <label className="block mb-2 text-sm">Email</label>
    <input required type="text" name="email" defaultValue={user.email} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
    </div>

<br />
     <div>
      <label htmlFor=""><h3>Short Description</h3></label>
      <textarea name="description"  rows="4" className="w-full border-2 bg-gray-100 mt-2 rounded-xl placeholder:p-1" placeholder="short description..."></textarea>
     </div>
   
      </div>
     
    </div>
    <div className=" my-5">
    <button className="btn w-full btn-info bg-cyan-300 font-bold">Add Post</button>
    </div>
    </form>
    </div>
  );
};

export default AddVolunteer;