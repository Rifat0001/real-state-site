import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Components/Layout/HomeLayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
<<<<<<< HEAD
import ItemInfo from './Components/HomeComponents/ItemInfo';
=======
import UserLayout from './Components/Pages/Login/UserLayout';
import Forget from './Components/Pages/Login/Forget';
>>>>>>> 1d16fe41a84190b3bda1d54fa2ce5b767d342b31
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch("/property.json"),
      },
      {
        path: "items/:id",
        element: <ItemInfo />,
        loader: ({params}) => fetch(`/property.json`),
        
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
