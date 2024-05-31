import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Donate = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (value) => {
    setInputValue(value);
  };
  

  const handleSubmit = async(e) => {

    e.preventDefault();
    const form = e.target;
    const donation =parseInt(form.donation.value);
    console.log(donation)


    const donarInfo = {
      donation,
      email:user.email,
      status: 'Due',
      transactionId:'----',
      date: new Date(),

    }

  const {data} = await axios.post('https://aid-link-server.vercel.app/donation',donarInfo)
  console.log(data);
  if(data.insertedId){
    navigate('/donation-payment')
  }
   
  }
  return (
    <div className="m-20">
    <h3 className="text-2xl font-bold my-5"> Choose A Donation Amount</h3>
     
     
     

     <div className="md:w-1/4 text-center" >
    <div className="flex flex-row gap-2 ml-2 justify-center">
    <button className="btn bg-cyan-300" onClick={() => handleButtonClick(30)}>$30</button>
      <button className="btn bg-cyan-300" onClick={() => handleButtonClick(50)}>$50</button>
      <button className="btn bg-cyan-300" onClick={() => handleButtonClick(100)}>$100</button>
      <button className="btn bg-cyan-300" onClick={() => handleButtonClick(500)}>$500</button>
    </div>
     <form className="my-8"  onSubmit={handleSubmit}>
    <label className="flex ">
    <span className="left-5 top-3 relative">$</span>
     <input 
       name="donation"
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        className="input input-bordered w-full   px-5"
      />
    </label>
      <br />
      <input required type="submit" className="btn ml-2 my-5 bg-yellow-600 w-full " value="donate" />
     

     </form>
    </div>
    </div>
  );
};

export default Donate;