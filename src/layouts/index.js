import React from "react";

import SideBar from "../components/SideBar";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";
import Player from "../components/Player";
import Header from "../components/Header";

const LayoutHome = (props) => {
  return (
    <div className="ms_main_wrapper">
      <SideBar />
      <Header />
      <PageWrapper />
      <Footer />
      <Player />
    </div>
  );
}; 
export default LayoutHome;
