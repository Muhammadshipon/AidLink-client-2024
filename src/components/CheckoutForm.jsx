import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useDonation from "../hooks/useDonation";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState('');
  const [clientSecret,setClientSecret] = useState('');
  const {donation} = useDonation();
  const [transactionId,setTransactionId] = useState('');
  const {user} = useContext(AuthContext);
  const totalDonation = donation.reduce((total,currentItem)=>total+currentItem.donation,0)
  console.log(totalDonation);

  useEffect(()=>{

    axios.post('https://aid-link-server.vercel.app/donation/create-payment-intent',{donation:totalDonation})
    .then(res=>{
      console.log(res.data);
      setClientSecret(res.data.clientSecret);
    })
  },[ ])

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

  
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // payment method 
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('stripe error is ', error);
      setError(error);
    } else {
      console.log('PaymentMethod is', paymentMethod);
      setError('');
    }



    const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName||'anonymous',
            email: user?.email||'anonymous'
          },
        },
      },
    );
    if(confirmError){
      console.log(confirmError);
    }
    else{
      console.log('paymentIntent',paymentIntent);
      if(paymentIntent.status ==='succeeded'){
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
            email:user.email,
            price: totalDonation,
            transactionId: paymentIntent.id,
            date: new Date(),
           
            status:'paid'

        }
        const res = await axios.post('https://aid-link-server.vercel.app/payments',payment)
        console.log('payment save database ',res.data);
      
        Swal.fire({
          title: "Payment successfully",
          
          icon: "success"
        });
        navigate('/my-donation')
      }
    }
  }
  return (
    <div className="mx-24 text-center">
    <form onSubmit={handleSubmit}>
   <CardElement
   className="bg-gray-50 px-10 py-4 rounded-xl w-full md:w-1/2  mx-auto"
     options={{
       style: {
        
         base: {
          
          
           fontSize: '16px',
          
        
           color: '#424770',
           
           '::placeholder': {
             color: '#aab7c4',
           },
         },
         invalid: {
           color: '#9e2146',
         },
       },
     }}
   />
   <button  disabled={!stripe ||!clientSecret} className="btn bg-cyan-600 text-white font-bold px-20 pb-1 my-10 text-3xl" type="submit" >
     Pay
   </button>
   <p className="text-red-600 mb-10 ">{error.message}</p>
 </form>
 </div>
  );
};

export default CheckoutForm;