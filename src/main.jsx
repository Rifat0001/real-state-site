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
import Activation from './Components/Pages/Login/activation';
import Forget from './Components/Pages/Login/Forget';
import ResetPassword from './Components/Pages/Login/reset_password.jsx';
import AgentList from './Components/Pages/Agent/AgentList';
import AgentProfile from './Components/Pages/Agent/AgentProfile';
import PropertyList from './Components/Pages/PropertyList/PropertyList';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import AgentProperty from './Components/Pages/Agent/AgentProperty';
import Organization from './Components/Pages/Organization/Organization';
import Checkout from './Components/Pages/Checkout/Checkout';
import MyProperty from './Components/Pages/MyProperty/MyProperty';
import PromotePage from './Components/Pages/MyProperty/PromotePage';
import MyAgents from './Components/Pages/MyAgents/MyAgents';
import AddAgent from './Components/Pages/Agent/AddAgent';
import Settings from './Components/Settings/Settings';
import ProfileSetting from './Components/Pages/Profile Settings/ProfileSetting';
import PropertyListing from './Components/Pages/MyProperty/PropertyListing';
import PrivateRoute from "./private.jsx"
import PrivateRouteOrg from './privateORG.jsx';
import PrivateRouteOrgAg from "./privateORGAG.jsx";
import PrivateRouteAgent from "./privateAGENT.jsx";
import { Provider } from 'react-redux';
import store from './store.js';
import Meet from './Components/Pages/Chat/meet.jsx';
import Inbox from './Components/Pages/Chat/inbox.jsx';
import Notification from './Components/Settings/Notification.jsx';

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
        element: <ItemInfo />
      },
      {
        path: 'login',
        element: <UserLayout></UserLayout>
      },
      {
        path: "/activation/:uid/:token",
        element: <Activation />,
      },
      {
        path: "/password-reset/:uid/:token",
        element: <ResetPassword />,
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
        path: 'agentprofile/:id',
        element: <AgentProfile></AgentProfile>
      },
      {
        path: 'property-lists',
        element: <PropertyList></PropertyList>
      },
      // {
      //   path: 'property-lists/:id',
      //   element: <PropertyList></PropertyList>
      // },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      // {
      //   path: 'agentProperty',
      //   element: <AgentProperty></AgentProperty>
      // },
      {
        path: 'organization/:id',
        element: <Organization></Organization>
      },
      // {
      //   path: 'checkout',
      //   element: <Checkout></Checkout>
      // },
      {
        path: 'myProperty',
        element: <PrivateRouteOrgAg component={MyProperty} />
      },
      {
        path: 'notification',
        element: <PrivateRouteAgent component={Notification} />
      }
      ,
      {
        path: 'promote',
        element: <PromotePage></PromotePage>
      },
      {
        path: 'myAgents',
        element: <PrivateRouteOrg component={MyAgents} />
      },
      {
        path: 'addAgent',
        element: <PrivateRouteOrg component={AddAgent} />
      },
      {
        path: 'setting',
        element: <PrivateRoute component={Settings}/>
      },
      {
        path: 'profile-setting',
        element: <PrivateRouteOrgAg component={ProfileSetting} />
      }
      ,
      {
        path: 'add-listing',
        element: <PrivateRouteOrgAg component={PropertyListing} />
      },
      {
        path: '/meet',
        element: <PrivateRoute component={Meet} />
      },
      {
        path: '/inbox/:id',
        element: <PrivateRoute component={Inbox} />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
