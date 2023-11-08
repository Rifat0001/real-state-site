import React from 'react';
import { connect } from 'react-redux';
import Login from './Components/Pages/Login/Login';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated === true) {
    return <Component {...rest} />;
  } else if (isAuthenticated === false) {
    return <Login />;
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // Replace with your actual authentication state
});

export default connect(mapStateToProps)(PrivateRoute);