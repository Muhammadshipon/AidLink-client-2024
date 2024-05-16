import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import NeedVolunteer from "../Pages/NeedVolunteer";
import ErrorPage from "../Pages/ErrorPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddVolunteer from "../Pages/AddVolunteer";
import ViewDetailsPost from "../Pages/ViewDetailsPost";
import BeAVolunteer from "../Pages/BeAVolunteer";
import ManageMyPost from "../Pages/ManageMyPost";
import UpdatePost from "../Pages/UpdatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/need-volunteer',
        element:<NeedVolunteer></NeedVolunteer>
        
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/add-volunteer-post',
        element:<AddVolunteer></AddVolunteer>
      },
      {
        path:"/view-details-post/:id",
        element:<PrivateRoute><ViewDetailsPost></ViewDetailsPost></PrivateRoute>,
        loader:({params})=>fetch(`https://aid-link-server.vercel.app/posts/${params.id}`)
      
      },
      {
        path:"/be-a-volunteer/:id",
        element:<PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
        loader:({params})=>fetch(`https://aid-link-server.vercel.app/posts/${params.id}`)
      
      },
      {
        path:"/update-post/:id",
        element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        loader:({params})=>fetch(`https://aid-link-server.vercel.app/posts/${params.id}`)     
      },
      {
        path:'/manage-my-post',
        element:<PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
      }
    ]
  },
]);