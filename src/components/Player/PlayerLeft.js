import React from "react";
import { Link } from "react-router-dom";

import WeeklyArtist from "../../assets/images/weekly/song1.jpg";

const PlayerLeft = (props) => {
  return (
    <div className="player_left">
      <div className="ms_play_song">
        <div className="play_song_name">
          <Link to="/" id="playlist-text">
            <div className="jp-now-playing flex-item">
              <div className="jp-track-name">
                <span className="que_img">
                  <img alt="temp" src={WeeklyArtist} />
                </span>
                <div className="que_data">
                  Cro Magnon Man <div className="jp-artist-name">Mushroom Records</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="play_song_options">
        <ul>
          <li>
            <Link to="/">
              <span className="song_optn_icon">
                <i className="ms_icon icon_download" />
              </span>
              download now
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="song_optn_icon">
                <i className="ms_icon icon_fav" />
              </span>
              Add To Favourites
            </Link>
          </li>
          <li>
            <Link to="/"  >
              <span className="song_optn_icon">
                <i className="ms_icon icon_playlist" />
              </span>
              Add To Playlist
            </Link>
          </li>
          <li>
            <Link to="/"  >
              <span className="song_optn_icon">
                <i className="ms_icon icon_share" />
              </span>
              Share
            </Link>
          </li>
        </ul>
      </div>
      <span className="play-left-arrow">
        <i className="fa fa-angle-right" aria-hidden="true" />
      </span>
    </div>
  );
};

export default PlayerLeft;
