import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../actions/auth'

const HomeLayout = ({ checkAuthenticated, load_user }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);
    return (
        <div className="">
            <Header ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(HomeLayout);