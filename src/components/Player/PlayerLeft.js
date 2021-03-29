import React,{useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import WeeklyArtist from "../../assets/images/weekly/song1.jpg";

const PlayerLeft = (props) => {
  const [showOption, setShowOption] = useState(false);

  return (
    <div className={showOption ? "player_left open_list" : "player_left"}>
      <div className="ms_play_song">
        <div className="play_song_name">
          <Link to="/" id="playlist-text">
            <div className="jp-now-playing flex-item">
              <div className="jp-track-name">
                <span className="que_img">
                  <img
                    style={{ width: "50px", height: "50px" }}
                    alt="temp"
                    src={
                      props.jPlaylistsReducer.AudioPlaylist.playlist[
                        props.jPlaylistsReducer.AudioPlaylist.current
                      ].poster
                    }
                  />
                </span>
                <div className="que_data">
                 <div className="jp-song-name"> {
                    props.jPlaylistsReducer.AudioPlaylist.playlist[
                      props.jPlaylistsReducer.AudioPlaylist.current
                    ].title
                  }</div> 
                  <div className="jp-artist-name">
                    {
                      props.jPlaylistsReducer.AudioPlaylist.playlist[
                        props.jPlaylistsReducer.AudioPlaylist.current
                      ].artist
                    }
                  </div>
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
            <Link to="/">
              <span className="song_optn_icon">
                <i className="ms_icon icon_playlist" />
              </span>
              Add To Playlist
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="song_optn_icon">
                <i className="ms_icon icon_share" />
              </span>
              Share
            </Link>
          </li>
        </ul>
      </div>
      <span
        className="play-left-arrow"
        onClick={() => setShowOption((value) => (value = !value))}
      >
        <i className="fa fa-angle-right" aria-hidden="true" />
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { jPlaylistsReducer: state.jPlaylists };
};

export default connect(mapStateToProps)(PlayerLeft);
