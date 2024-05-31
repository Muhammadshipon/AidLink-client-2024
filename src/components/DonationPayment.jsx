import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const DonationPayment = () => {
  
  return (
    <div className="">
     <h1 className="text-3xl font-bold text-yellow-400 text-center my-10">Please Pay Your Donation</h1>
      <Elements  stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
    </div>
  );
};

export default DonationPayment;