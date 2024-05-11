import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import NeedVolunteer from "../Pages/NeedVolunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/need-volunteer',
        element:<NeedVolunteer></NeedVolunteer>
      }
    ]
  },
]);