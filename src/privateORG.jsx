import React from 'react';
import { connect,useSelector } from 'react-redux';
import Login from './Components/Pages/Login/Login';

const PrivateRouteOrg = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated === false) {
    return <Login />;
  }
  else if (isAuthenticated === true) {
    const user = useSelector((state) => state.auth.user);
    if(user!=null&& user['role']=='3')
      return <Component />;
    else return null;
  }  else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // Replace with your actual authentication state
});

export default connect(mapStateToProps)(PrivateRouteOrg);