import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../provider/AuthProvider';
import MyNeedVolunteer from '../components/MyNeedVolunteer';
import MyVolunteerRequest from '../components/MyVolunteerRequest';

const ManageMyPost = () => {
  const {user} = useContext(AuthContext);
  const [posts,setPosts] = useState([]);
  const [requests,setRequests] = useState([]);


  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios(`http://localhost:9000/post?email=${user?.email}`)
      setPosts(data);
    }
   getData();
  },[])
  console.log(posts);

  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios(`http://localhost:9000/request?email=${user?.email}`)
      setRequests(data);
    }
   getData();
  },[])
  console.log(requests)
  return (
   <div>
   <h1 className="text-3xl font-bold text-center my-10 text-yellow-400">Manage My Post</h1>
<Tabs>
    <TabList>
      <Tab >My Need Volunteer Post</Tab>
      <Tab >My Volunteer Request Post</Tab>
    </TabList>

    <TabPanel>
    <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Post title</th>
        <th>DeadLine</th>
        <th>Location</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
      posts.map(post=><MyNeedVolunteer post={post} key={post._id}></MyNeedVolunteer>)
     }
     
    </tbody>
   
   

  </table>





    
    </TabPanel>
    <TabPanel>
    <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Request Post Title</th>
        <th>DeadLine</th>
        <th>Location</th>
        <th>Cancel Request</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
      requests.map(request=><MyVolunteerRequest request={request} key={request._id}></MyVolunteerRequest>)
    }
     
    </tbody>
   
   

  </table>
   
    </TabPanel>
  </Tabs>
   </div>
  );
};

export default ManageMyPost;