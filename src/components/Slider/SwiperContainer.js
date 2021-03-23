import React from "react";
import Slider from "react-slick";
import SlideContent from "./SlideContent";

// import PlayIcon from "../../assets/images/svg/play.svg";
// import MoreIcon from "../../assets/images/svg/more.svg";
// import MusicRIcon from "../../assets/images/music/r_music1.jpg";
// import MusicRIcon2 from "../../assets/images/music/r_music2.jpg";
// import MusicRIcon3 from "../../assets/images/music/r_music3.jpg";
// import SliderData from "../../mock/sliderData";

const settings = {
  dots: true,
  speed: 1500,
  slidesToShow: 6,
  infinite: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        speed: 1500,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1500,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
      },
    },
  ],
};

const listTrack = [];

const SwiperContainer = (props) => {
  // const SampleNextArrow = (props) => {
  //   const { className,  onClick } = props;
  //   return <div className={className} onClick={onClick} />;
  // };

  // function SamplePrevArrow(props) {
  //   const { className,   onClick } = props;
  //   return <div className={className} onClick={onClick} />;
  // }

  for (var i = 0; i < 7; i++) {
    listTrack.push({
      trackName: "TracksName",
      authors: ["Đoàn Văn Linh"],
    });
  }

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Slider
          {...settings}
          // nextArrow={SampleNextArrow({ className: "swiper-button-next slider_nav_next" })}
          // prevArrow={SamplePrevArrow({ className: "swiper-button-prev slider_nav_prev" })}
        >
          {listTrack.map((track, index) => {
            return (
              <SlideContent
                trackName={track.trackName}
                authors={track.authors}
                key={"SlideContent" + index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default SwiperContainer;
