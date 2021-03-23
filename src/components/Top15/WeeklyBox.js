import React from "react";

import Song1 from "../../assets/images/weekly/song1.jpg";

import SGVPlay from "../../assets/images/svg/play.svg";

import MoreIcon from "../../assets/images/svg/more.svg"; 

const WeeklyBox = (props) => {
  return (
    <>
      <div className="ms_weekly_box">
        <div className="weekly_left">
          <span className="w_top_no">{props.topNo} </span>
          <div className="w_top_song">
            <div className="w_tp_song_img">
              <img src={Song1} alt className="img-fluid" />
              <div className="ms_song_overlay"></div>
              <div className="ms_play_icon">
                <img src={SGVPlay} alt />
              </div>
            </div>
            <div className="w_tp_song_name">
              <h3>
                <a href="#">{props.songName}</a>
              </h3>
              <p> {props.artistName}</p>
            </div>
          </div>
        </div>
        <div className="weekly_right">
          <span className="w_song_time">{props.time}</span>
          <span className="ms_more_icon" data-other={1}>
            <img src={MoreIcon} alt />
          </span>
        </div>
        <ul className="more_option">
          <li>
            <a href="#">
              <span className="opt_icon">
                <span className="icon icon_fav" />
              </span>
              Add To Favourites
            </a>
          </li>
          <li>
            <a href="#">
              <span className="opt_icon">
                <span className="icon icon_queue" />
              </span>
              Add To Queue
            </a>
          </li>
          <li>
            <a href="#">
              <span className="opt_icon">
                <span className="icon icon_dwn" />
              </span>
              Download Now
            </a>
          </li>
          <li>
            <a href="#">
              <span className="opt_icon">
                <span className="icon icon_playlst" />
              </span>
              Add To Playlist
            </a>
          </li>
          <li>
            <a href="#">
              <span className="opt_icon">
                <span className="icon icon_share" />
              </span>
              Share
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeeklyBox;
