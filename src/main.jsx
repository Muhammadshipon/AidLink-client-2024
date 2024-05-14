import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Route.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><HelmetProvider><RouterProvider router={router} /></HelmetProvider></AuthProvider>
  </React.StrictMode>,
)
