import React from "react";

import ImgSrc1 from "../../assets/images/adv.jpg";
const QuangCao = (props) => {
  return (
    <div>
      <div className="ms_advr_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="#">
                <img src={ImgSrc1} alt className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuangCao;
