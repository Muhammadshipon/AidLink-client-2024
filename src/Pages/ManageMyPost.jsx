import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../provider/AuthProvider';
import MyNeedVolunteer from '../components/MyNeedVolunteer';
import MyVolunteerRequest from '../components/MyVolunteerRequest';
import { Helmet } from 'react-helmet-async';

const ManageMyPost = () => {
  const {user} = useContext(AuthContext);
  const [posts,setPosts] = useState([]);
  const [requests,setRequests] = useState([]);


  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios(`https://aid-link-server.vercel.app/post?email=${user?.email}`,{withCredentials:true})
      setPosts(data);
    }
   getData();
  },[])
  console.log(posts);

  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios(`https://aid-link-server.vercel.app/request?email=${user?.email}`,{withCredentials:true})
      setRequests(data);
    }
   getData();
  },[])
  console.log(requests)
  return (
   <div>
     <Helmet>
      <title>AidLink || Manage My Post</title>
      </Helmet>
   <h1 className="text-3xl font-bold text-center my-10 text-yellow-400">Manage My Post</h1>
<Tabs>
    <TabList>
      <Tab >My Need Volunteer Post</Tab>
      <Tab >My Volunteer Request Post</Tab>
    </TabList>

    <TabPanel>

      {
        posts.length!==0?
        <table className="table mb-10">
     
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
       
    
          {
          
          posts.map(post=><MyNeedVolunteer
            posts={posts}
             setPosts={setPosts}
            post={post} key={post._id}></MyNeedVolunteer>) 
          
         }
         
        </tbody>
       
       
    
      </table>
        : <p className='my-5'>No Post Available</p>

        
      }
   





    
    </TabPanel>
    <TabPanel>
   {
    requests.length !== 0?
    <table className="table mb-10">
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
      requests.map(request=><MyVolunteerRequest
         requests={requests} 
         setRequests={setRequests} 
         request={request} key={request._id}></MyVolunteerRequest>)
    }
     
    </tbody>
   
   

  </table> : <p className='my-5'>No Request Available</p>
   }
   
    </TabPanel>
  </Tabs>
   </div>
  );
};

export default ManageMyPost;