import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyDonation = () => {
  const {user} = useContext(AuthContext);
  const [payment,setPayment] = useState([]);
  useEffect(()=>{
    axios.get(`https://aid-link-server.vercel.app/payments?${user.email}`)
    .then(res=>{
     console.log(res.data);
     setPayment(res.data);
    })
 },[])
  return (
    <div>
     <h1 className="text-2xl font-bold text-center text-yellow-400 my-10"> My Donation History</h1>


      <div className="overflow-x-auto max-w-5xl px-10 mx-auto mb-10">
       <table className="table">
         {/* head */}
         <thead>
           <tr>
             <th>SI</th>
             <th>Donation Amount</th>
            
             <th>Transaction Id</th>
             <th>Status</th>
           </tr>
         </thead>
         <tbody>
           {/* row 1 */}



           {
             payment.map((item,idx)=>(

               <tr key={item._id}>
               <td>{idx+1}</td>
               <td>
                 
                   <p>${item.price}</p>
               </td>
              
              

               <td>
                 {item.transactionId}
               </td>
               <th>
              {item.status}
               </th>
             </tr>
            





             ))
           }
          
          
         </tbody>
        
        

       </table>
     </div>  
    </div>
  );
};

export default MyDonation;