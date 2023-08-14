// Tabs.js
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import './Tabs.css'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("login");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="my-5 ">
            <button
                onClick={() => handleTabClick("login")}
                className={`md:w-[253px] w-[185px] ${activeTab === "login" ? 'active-tab' : ''}`}
            >
                Login
            </button>
            <button
                onClick={() => handleTabClick("register")}
                className={`md:w-[253px] w-[185px] ${activeTab === "register" ? 'active-tab' : ''}`}
            >
                Register
            </button>
            {activeTab === "login" ? <Login /> : <Register />}
        </div>
    );
};

export default Tabs;
