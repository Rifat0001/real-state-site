import React from 'react';
import { connect } from 'react-redux';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home.jsx';
import { Link, useNavigate } from "react-router-dom";

const NormalUserOnlyRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    const navigate = useNavigate();
    if (isAuthenticated === true) {
        return navigate("/");
    } else if (isAuthenticated === false) {
        return <Component {...rest} />;
    } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // Replace with your actual authentication state
});

export default connect(mapStateToProps)(NormalUserOnlyRoute);