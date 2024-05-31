import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const useDonation = () => {
  const [donation,setDonation] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
     axios.get(`https://aid-link-server.vercel.app/donation?${user.email}`)
     .then(res=>{
      console.log(res.data);
      setDonation(res.data);
     })
  },[])
  return {donation};
};

export default useDonation;