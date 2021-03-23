import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import { TopBoard } from "../../components/Top15";
import TopGenres from '../../components/TopGenres';

import QuangCao from "../../components/QuangCao";

const Discover = (props) => {
  return (
    <>
      <Banner />
      <Slider  headingContent={"Recently Played"}/>
      <TopBoard data={{ name: "linh" }} name="linh"></TopBoard>
      <Slider  headingContent={"Featured Artists"} />
      <QuangCao />
      <QuangCao />
      <TopGenres/>
    </>
  );
};

export default Discover;
