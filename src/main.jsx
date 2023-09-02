import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Components/Layout/HomeLayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import ItemInfo from './Components/HomeComponents/ItemInfo';
import UserLayout from './Components/Pages/Login/UserLayout';
import Forget from './Components/Pages/Login/Forget';
import AgentList from './Components/Pages/Agent/AgentList';
import AgentProfile from './Components/Pages/Agent/AgentProfile';
import PropertyList from './Components/Pages/PropertyList/PropertyList';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import AgentProperty from './Components/Pages/Agent/AgentProperty';
import Organization from './Components/Pages/Organization/Organization';
import Checkout from './Components/Pages/Checkout/Checkout';


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
        loader: ({ params }) => fetch(`/property.json`),

      },
      {
        path: 'login',
        element: <UserLayout></UserLayout>
      },
      {
        path: 'forget',
        element: <Forget></Forget>
      },
      {
        path: 'agents',
        element: <AgentList></AgentList>
      },
      {
        path: 'agentprofile',
        element: <AgentProfile></AgentProfile>
      },
      {
        path: 'property-lists',
        element: <PropertyList></PropertyList>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'agentProperty',
        element: <AgentProperty></AgentProperty>
      },
      {
        path: 'organization',
        element: <Organization></Organization>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />


  </React.StrictMode>,
)
