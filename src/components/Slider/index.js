import React  from "react";  
import SwiperContainer from "./SwiperContainer";
   
const Slider = (props) => { 
  return (
    <div className="ms_rcnt_slider">
      <div className="ms_heading">
        <h1>{props.headingContent}</h1>
        <span className="veiw_all">
          <a 
            href="/"
          >
            view more
          </a>
        </span>
      </div>
      <SwiperContainer   />
    </div>
    //     <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
    //     <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
    //   </div>

    //   {/* Add Arrows */}
    //   <div className="swiper-button-next slider_nav_next" />
    //   <div className="swiper-button-prev slider_nav_prev" />
    // </div>
  );
};
export default Slider;
