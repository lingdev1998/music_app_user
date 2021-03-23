import React from "react";
import { Link } from "react-router-dom";

import PlayIcon from "../../assets/images/svg/play.svg";
import MoreIcon from "../../assets/images/svg/more.svg";
import MusicRIcon from "../../assets/images/music/r_music1.jpg";

const SlideContent = (props) => {
  return (
    <div className="swiper-slide" style={{ marginRight: 30 }}>
      <div className="ms_rcnt_box">
        <div className="ms_rcnt_box_img">
          <img alt="slide-img" src={MusicRIcon} />
          <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_more_icon">
              <img alt="slide-img" src={MoreIcon} />
            </div>
            <ul className="more_option">
              <li>
                <Link href="#">
                  <span className="opt_icon">
                    <span className="icon icon_fav" />
                  </span>
                  Add To Favourites
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="opt_icon">
                    <span className="icon icon_queue" />
                  </span>
                  Add To Queue
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="opt_icon">
                    <span className="icon icon_dwn" />
                  </span>
                  Download Now
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="opt_icon">
                    <span className="icon icon_playlst" />
                  </span>
                  Add To Playlist
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="opt_icon">
                    <span className="icon icon_share" />
                  </span>
                  Share
                </Link>
              </li>
            </ul>
            <div className="ms_play_icon">
              <img alt="slide-img" src={PlayIcon} />
            </div>
          </div>
        </div>
        <div className="ms_rcnt_box_text">
          <h3>
            <Link to={props.trackUrl}>{props.trackName}</Link>
          </h3>
          <p>
            {props.authors.map((author, index) => {
              return <>{author} &amp;</>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SlideContent;
