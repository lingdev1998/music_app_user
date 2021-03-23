import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import { TopBoard } from "../../components/Top15";
import TopGenres from "../../components/TopGenres";

import QuangCao from "../../components/QuangCao";

const Album = (props) => {
  return (
    <>
      <QuangCao />
      <TopGenres />
    </>
  );
};

export default Album;
