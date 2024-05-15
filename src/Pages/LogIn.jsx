import { useContext } from "react";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const LogIn = () => {

  const {logInUser,
        googleLogIn,
        githubLogIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogIn =e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    if(!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)){
      
      Swal.fire({
        title: "Password Type is Wrong",
        text: "Your password should have at least one upperCase and lowerCase character",
        icon: "error"
      });
      return ;
    }
   
    else if(password.length<6){
      Swal.fire({
        title: "Password Type is Wrong",
        text: "password must be at least 6 character",
        icon: "error"
      });
     return;
    }


    logInUser(email,password)
    .then(result=>{
      console.log(result.user);
      Swal.fire({
        title: "Login Successfully",
        icon: "success"
      });

      const user = result.user;
      axios.post('http://localhost:9000/jwt',{email:user.email},{withCredentials:true})
      .then(res=>console.log(res.data))


      navigate(location?.state? location.state : "/")
    })
    .catch(error=>{
      console.log(error.message)
      Swal.fire({
        title: "Incorrect Email or Password",
        icon: "error"
      });
    })
 
  }


         // social Media logIn 

  const handleGoogleLogIn =()=>{
    googleLogIn()
    .then(result=>{
      console.log(result.user);
      Swal.fire({
        title: "Login Successfully",
        icon: "success"
      });
      const user = result.user;
      axios.post('http://localhost:9000/jwt',{email:user.email},{withCredentials:true})
      .then(res=>console.log(res.data))
      navigate(location?.state? location.state : "/")
    })
    .catch(error=>{
      console.log(error.message);
      Swal.fire({
        title: "Failed to login",
        text:'Please try again after some time',
        icon: "error"
      });
    })
  }

  const handleGithubLogIn=()=>{
    githubLogIn()
  .then(result=>{
    console.log(result.user);
    Swal.fire({
      title: "Login Successfully",
      icon: "success"
    });

    const user = result.user;
      axios.post('http://localhost:9000/jwt',{email:user.email},{withCredentials:true})
      .then(res=>console.log(res.data))

    navigate(location?.state? location.state : "/")
  })
  .catch(error=>{
    console.log(error.message);
    Swal.fire({
      title: "Failed to login",
      text:'Please try again after some time',
      icon: "error"
    });
   
  })
  }


  return (
    <div className="flex justify-center items-center mb-16 px-5">
 <Helmet>
      <title>AidLink || Login</title>
      </Helmet>
      <div 
      data-aos="zoom-in"
      data-aos-delay="50"
     data-aos-duration="1000"
      
      className="flex flex-col max-w-md p-6 rounded-3xl sm:p-10 shadow-xl border-2 border-gray-400 mt-20">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm">Log in to access your account</p>
        </div>
        <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
          </div>
       
            <div>
             <input type="submit" value="Log In" className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-400 text-white" />
            </div>
            </form>

            <div className="space-y-2">
            <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-white"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-white"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="p-3 hover:scale-110 rounded-sm">
    <svg viewBox="0 0 48 48" className="w-10 h-5 fill-current">
  
  <clipPath id="g">
    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
  </clipPath>
  <g className="colors" clipPath="url(#g)">
    <path fill="#FBBC05" d="M0 37V11l17 13z"/>
    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
  </g>
</svg>
		</button>
		
		<button onClick={handleGithubLogIn} aria-label="Log in with GitHub" className="p-3 hover:scale-110  rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>








            <p className="px-6 text-sm text-center">Do not have an account yet?
              <Link to={"/register"}><a rel="noopener noreferrer" href="#" className="hover:underline text-indigo-400">Register</a>.</Link>
            </p>
          </div>
       



      </div>
 <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default LogIn;