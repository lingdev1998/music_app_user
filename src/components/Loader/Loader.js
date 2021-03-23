import React from "react";
import LoaderImg from '../../assets/images/loader.gif';

const Loader = (props) => {
  return (
    <div class="ms_loader">
      <div class="wrap">
        <img src={LoaderImg} alt="" />
      </div>
    </div>
  );
};

export default Loader;
