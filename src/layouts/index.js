import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getCurrentAccount } from "../redux/reducers/authReducer";
import { ACTION_TYPES as appActionTypes } from "../redux/reducers/appReducer";
import { ACCESS_TOKEN } from "../constants";

import SideBar from "../components/SideBar";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";
import Player from "../components/Player";
import Header from "../components/Header";
import Loader from "../components/Loader/Loader";

const LayoutHome = (props) => {
  
  useEffect(() => {
    let token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      props.showLoading();
      props.getCurrentAccount();
    }
  }, [props.authReducer.isAuthenticated]);

  return (
    <div className="ms_main_wrapper">
      <Loader isLoading={props.appReducer.isLoading} />
      <SideBar />
      <Header />
      <PageWrapper />
      <Footer />
      <Player />
    </div>
  );
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
  appReducer: state.appReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentAccount: () => dispatch(getCurrentAccount()),
    showLoading: () => dispatch({ type: appActionTypes.SHOW_LOADING }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutHome);
