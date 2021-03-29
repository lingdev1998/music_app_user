import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import { TopBoard } from "../../components/Top15";
import TopGenres from "../../components/TopGenres";
import QuangCao from "../../components/QuangCao";

const Discover = (props) => {
  console.log("linh");
  return (
    <>
      <Banner />
      <div className="ms_content_wrapper padder_top60">
        <Slider headingContent={"Recently Played"} />
        <TopBoard data={{ name: "linh" }} name="linh"></TopBoard>
        <Slider headingContent={"Featured Artists"} />
        <QuangCao />
        <TopGenres />
        <QuangCao />
      </div>
    </>
  );
};

export default Discover;
