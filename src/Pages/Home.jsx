import { Link, ScrollRestoration } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerNeedsNow from "../components/VolunteerNeedsNow";
import { Helmet } from "react-helmet-async";
import SuccessStory from "../components/SuccessStory";
import Programs from "../components/Programs";
import { useRef } from "react";


const Home = () => {
  const programs = useRef(null);

  const scrollToPrograms = () => {
    programs.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
       <Helmet>
      <title>AidLink</title>
      </Helmet>
      {/* banner  */}
    <div>
    <Banner  onClick={scrollToPrograms}></Banner>
    </div>

    {/* volunteer needs now section  */}
    <section className="my-32 mx-auto w-full">
      <h1 
      data-aos="fade-up"
      
      data-aos-duration="1000"
      className="text-2xl px-5 md:text-5xl text-cyan-400 font-bold text-center my-10">Volunteer Needs Now</h1>
      <div className="flex justify-center items-center">
      <VolunteerNeedsNow></VolunteerNeedsNow>
      </div>
     <div className="  text-center ">
    <Link to={'/need-volunteer'}> <button className="btn my-6 px-10 font-bold">See All</button></Link>
     </div>
    </section>

     
     {/* our success story section  */}
  <section className="mb-10">
  <h1 
   
   data-aos="fade-up"
   data-aos-delay="300"
        data-aos-duration="1000"
  className="text-2xl px-5 md:text-5xl text-cyan-400 font-bold text-center my-10">Our Success Story</h1>
    <SuccessStory></SuccessStory>
    </section>   


      {/* our Programs section  */}
  <section ref={programs} className="mt-10  mb-20">
  
    <Programs></Programs>
    </section>   
     <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Home;