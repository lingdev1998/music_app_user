import React from "react";
import SideBar from "../components/SideBar";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";
import Player from "../components/Player";

const LayoutHome = (props) => {
  return (
    <div className="ms_main_wrapper">
      <SideBar />
      <PageWrapper />
      <Footer />
      <Player />
    </div>
  );
};
export default LayoutHome;
