import React from "react"; 

import PlaySVG from "../../assets/images/svg/play.svg"

const GenresBox = (props) => {
  return (
    <>
      <div className="ms_genres_box">
        <img src={props.imgSrc} alt className="img-fluid" />
        <div className="ms_main_overlay">
          <div className="ms_box_overlay" />
          <div className="ms_play_icon">
            <img src={PlaySVG}alt />
          </div>
          <div className="ovrly_text_div">
            <span className="ovrly_text1">
              <a href="#">{props.theLoai}</a>
            </span>
          </div>
        </div>
        <div className="ms_box_overlay_on">
          <div className="ovrly_text_div">
            <span className="ovrly_text1">
              <a href="#">{props.theLoai}</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default GenresBox;
