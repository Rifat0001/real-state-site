import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Components/Layout/HomeLayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import UserLayout from './Components/Pages/Login/UserLayout';
import Forget from './Components/Pages/Login/Forget';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <UserLayout></UserLayout>
      },
      {
        path: 'forget',
        element: <Forget></Forget>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />


  </React.StrictMode>,
)
