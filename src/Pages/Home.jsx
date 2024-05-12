import Banner from "../components/Banner";
import VolunteerNeedsNow from "../components/VolunteerNeedsNow";


const Home = () => {
  return (
    <div>
      {/* banner  */}
    <div>
    <Banner></Banner>
    </div>

    {/* volunteer needs now section  */}
    <section className="my-20 mx-auto w-full">
      <h1 className="text-2xl px-5 md:text-5xl text-cyan-400 font-bold text-center my-10">Volunteer Needs Now</h1>
      <div className="flex justify-center items-center">
      <VolunteerNeedsNow></VolunteerNeedsNow>
      </div>
    </section>
     
    </div>
  );
};

export default Home;