import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../../actions/auth";
import "./HomeLayout.css"; // Import the CSS file

const HomeLayout = ({ checkAuthenticated, load_user }) => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "bn",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div className="HomeLayout">
      <div id="google_translate_element"></div>
      {/* Apply the CSS class to the main container */}
      <Header></Header>
      <div className="Content">
        {" "}
        {/* Create a new container for the main content */}
        <Outlet></Outlet>
      </div>
      <Footer className="Footer"></Footer>{" "}
      {/* Apply the CSS class to the Footer component */}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(HomeLayout);
