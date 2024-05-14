import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const {user,setUser,logOutUser} = useContext(AuthContext);  

  const [theme,setTheme] = useState('light');

  useEffect(()=>{
   localStorage.setItem('theme',theme);
   const localTheme = localStorage.getItem('theme');
   document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])
 
   
 
   const handleToggleTheme = e =>{
    if(e.target.checked){
     setTheme('dark')
    }else{setTheme('light')}
   }

  const handleLogOut =()=>{
    logOutUser()
    .then(result=>{
      setUser(result.user)
    })
  }
  return (
<div className="navbar bg-base-100 ">
  <div className="flex-1">
   
    <Link to={"/"} className="btn btn-ghost text-md md:text-4xl -ml-3"><img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O3OmXmP3LomwCwLaQ_sEMiAmrLa1uAO18KSqyHwrLgGrvByWVqcCIgwiO3RMmunFQe8&usqp=CAU" alt="" /><h1 className="-ml-3 font-extrabold font-serif italic text-cyan-400">AidLink</h1></Link>
  </div>

  <div className="mr-10 flex flex-col md:flex-row font-semibold text-sm md:text-md text-cyan-600 gap-5">
  <NavLink to={'/'}   className={({ isActive}) =>isActive ? "text-cyan-600" : "text-cyan-400" 
  }>Home</NavLink>   
  <NavLink className={({ isActive}) =>isActive ? "text-cyan-600" : "text-cyan-400"
  } to={'/need-volunteer'}>Need Volunteer</NavLink> 
  </div>


  <div className="flex-none">
  

      {/* theme controller  */}
      <div>

     
      <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleToggleTheme} type="checkbox" className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="mr-5 swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
      </div>

{ 
  user?
  <>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" data-tooltip-id="my-tooltip" className="btn  btn-ghost btn-circle avatar " data-tooltip-content={user.displayName}>
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">
        <li><Link to={'/add-volunteer-post'}>Add Volunteer Post</Link></li>
        <li><Link to={'/manage-my-post'}>Manage My Post</Link></li>
        <li><Link  onClick={handleLogOut} to={"/"}>Logout</Link></li>

       
      </ul> 
    </div>
  </> :
  <>
   <Link to={'/login'}><button className="btn bg-cyan-400 text-white hover:bg-white hover:text-cyan-500">Login</button></Link>
  </>
}


    
    
    
  </div>
  <Tooltip id="my-tooltip" place="left" />
</div>
  );
};

export default Navbar;