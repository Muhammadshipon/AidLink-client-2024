import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";




export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();  
  const githubProvider = new GithubAuthProvider();  





const createUser = (email,password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}  

const logInUser = (email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const googleLogIn =()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
}

const githubLogIn =()=>{
  setLoading(true);
  return signInWithPopup(auth,githubProvider)
}

const logOutUser =()=>{
  setLoading(true);
  axios('https://aid-link-server.vercel.app/logout',{withCredentials:true})
  .then(res=>console.log(res.data))

  return signOut(auth);
}

useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setLoading(false);
  })
  return ()=>{
    unSubscribed()
  }
},[])



  const authInfo = {
    user,
    loading,
    setLoading,
   setUser,
   createUser,
   logInUser,
   googleLogIn,
   githubLogIn,
   logOutUser,
   

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
