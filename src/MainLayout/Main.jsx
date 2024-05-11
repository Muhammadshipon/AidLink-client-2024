import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
     <div className="min-h-[calc(100vh-410px)]">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;