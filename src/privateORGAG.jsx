import React from 'react';
import { connect,useSelector } from 'react-redux';
import Login from './Components/Pages/Login/Login';

const PrivateRouteOrgAg = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated === true) {
    const user = useSelector((state) => state.auth.user);
    if(user!=null && (user['role']=='3'||user['role']=='2'))
      return <Component {...rest} />;
    else return null;
  } else if (isAuthenticated === false) {
    return <Login />;
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // Replace with your actual authentication state
});

export default connect(mapStateToProps)(PrivateRouteOrgAg);