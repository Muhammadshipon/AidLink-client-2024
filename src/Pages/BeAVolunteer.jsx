import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BeAVolunteer = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const post = useLoaderData();
  const { _id, postTitle, thumbnail, location, numOfVolunteerNeeded, deadline, category, description, ownerName, ownerEmail } = post;

  const handleVolunteerRequest = async e => {
    e.preventDefault();
    const form = e.target;
    const numOfVolunteerNeeded = parseInt(form.numOfVolunteerNeeded.value);
    const volunteerName = user.displayName;
    const volunteerEmail = user.email;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const postId = _id;


    const newRequest = { postId, postTitle, thumbnail, location, numOfVolunteerNeeded, deadline, category, description, ownerName, ownerEmail, volunteerName, volunteerEmail, suggestion, status }
    console.log(newRequest);

    try {
      const { data } = await axios.post(
        `https://aid-link-server.vercel.app/request`,
        newRequest
      )
      console.log(data)
      Swal.fire({
        title: "Your Request Added Successfully",
        icon: "success"
      });
      form.reset();
      navigate('/manage-my-post')
    } catch (err) {
      console.log(err)
    }




  }



  return (
    <div 
    data-aos="fade-up"
    data-aos-delay="50"
   data-aos-duration="1000"
    className="flex justify-center items-center" >
      <Helmet>
      <title>AidLink || Be A Volunteer</title>
      </Helmet>
      <form onSubmit={handleVolunteerRequest} className="md:w-2/3 px-5 mb-10">
        {/* container  */}
        <h1 className="text-3xl font-bold text-center my-5 text-yellow-400">Add Your Request to Be A Volunteer</h1>
        <div className="flex flex-col md:flex-row  gap-10">
          {/* left side  */}
          <div className="md:w-1/2 space-y-4">
            <div>
              <label className="block mb-2 text-sm">Post Title</label>
              <input defaultValue={postTitle} disabled required type="text" name="postTitle" placeholder="Post Title" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Thumbnail</label>
              <input defaultValue={thumbnail} disabled required type="text" name="thumbnail" placeholder="thumbnail Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Location</label>
              <input defaultValue={location} disabled required type="text" name="location" placeholder="Location" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">No. of volunteers needed</label>
              <input defaultValue={numOfVolunteerNeeded} disabled required type="number"
     name="numOfVolunteerNeeded" placeholder="No. of volunteers needed" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Deadline</label>
              <DatePicker

                className="p-2 border rounded-lg bg-slate-200"
                showIcon
                selected={deadline}
                disabled

              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Organizer Name</label>
              <input required type="text" name="name" defaultValue={ownerName} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Organizer Email</label>
              <input required type="text" name="email" defaultValue={ownerEmail} disabled className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>



          </div>

          {/* right side  */}
          <div className="md:w-1/2 space-y-5 mt-7">

            <select defaultValue={category} disabled name="category" className="select select-bordered w-full ">
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
              <textarea defaultValue={description} disabled name="description" rows="4" className="w-full border-2 bg-gray-100 mt-2 rounded-xl placeholder:p-1" placeholder="short description..."></textarea>
            </div>

            <div>
              <label className="block mb-2 text-sm">Suggestion</label>
              <input placeholder="comment please" required type="text" name="suggestion" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-100  text-gray-600" />
            </div>

            <select disabled name="status" className="select select-bordered w-full ">
              <option disabled selected>Requested</option>

            </select>

          </div>

        </div>
        <div className=" my-5">
          <input  className="btn w-full bg-yellow-300 font-bold" type="submit" value="Request" />

        </div>
      </form>
    </div>
  );
};

export default BeAVolunteer;
