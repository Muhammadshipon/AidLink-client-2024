
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import NeedVolunteerTable from '../components/NeedVolunteerTable';



const NeedVolunteer = () => {
  const [posts,setPosts] = useState([]);
  const [view, setView] = useState('card');


  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios.get('http://localhost:9000/all-posts')
      setPosts(data);
    }
   getData();
  },[])

  console.log(posts)

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div>
      <ToggleButtonGroup
      
      value={view}
      exclusive
      onChange={handleChange}
    >
     
      <ToggleButton value="card" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="table" aria-label="list">
      <FormatAlignJustifyIcon/>
      </ToggleButton>
    </ToggleButtonGroup>
  this is need volunteer page   
  {view ==='card'?
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {
        posts.map(post=><PostCard key={post._id} post={post}></PostCard>)
      }
    </div>
        </div>
        :
        <div>
           <table className="table mb-10">
    {/* head */}
    <thead>
      <tr>
        
        <th>Post Title</th>
        <th>DeadLine</th>
        <th>Location</th>
        <th>Post Details</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
      posts.map(post=><NeedVolunteerTable
         post={post}
        key={post._id}></NeedVolunteerTable>)
    }
     
    </tbody>
   
   

  </table>
        </div>
  } 
    </div>
  );
};

export default NeedVolunteer;