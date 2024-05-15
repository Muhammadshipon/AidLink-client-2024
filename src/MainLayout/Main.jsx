import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main = () => {
  return (
    <div>

   
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      
     <div className="min-h-[calc(100vh-410px)]">
     <Outlet></Outlet>
     </div>
     
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Main;