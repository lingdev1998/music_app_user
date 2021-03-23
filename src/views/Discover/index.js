import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import { TopBoard } from "../../components/Top15";
import TopGenres from "../../components/TopGenres";
import QuangCao from "../../components/QuangCao"; 

const Discover = (props) => { 
  console.log("linh")
  return ( 
    <>
      <Banner />
      <Slider headingContent={"Recently Played"} />
      <TopBoard data={{ name: "linh" }} name="linh"></TopBoard>
      <Slider headingContent={"Featured Artists"} />
      <QuangCao />
      <TopGenres />
      <QuangCao />
    </>
  );
};

export default Discover;
