import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import NeedVolunteer from "../Pages/NeedVolunteer";
import ErrorPage from "../Pages/ErrorPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

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
      }
    ]
  },
]);