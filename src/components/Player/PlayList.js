import React, { useEffect } from "react";
import JPlayer, {
  Gui,
  SeekBar,
  BufferBar,
  Poster,
  Audio,
  Title,
  FullScreen,
  Mute,
  Play,
  PlayBar,
  VolumeBar,
  Duration,
  CurrentTime,
  Download,
  BrowserUnsupported,
} from "react-jplayer";

import JPlaylist, {
  initializeOptions,
  Playlist,
  Shuffle,
  Next,
  Previous,
  Repeat,
  TogglePlaylist,
  Remove,
  MediaLink,
  Title as PlaylistTitle,
} from "react-jplaylist";

import $ from "jquery";

import { connect } from "react-redux";

import VolumeIcon from "../../assets/images/svg/volume.svg";

const jPlayerOptions = {
  id: "AudioPlaylist",
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      id: 0,
      title: "Bubble",
      artist: "Miaow",
      sources: {
        m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
      },
      free: true,
    },
    {
      id: 1,
      title: "Tempered Song",
      artist: "Miaow",
      sources: {
        mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
      },
    },
    {
      id: 2,
      title: "Cro Magnon Man",
      artist: "The Stark Palace",
      sources: {
        mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
        oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      },
      poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
    },
  ],
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const PlayList = (props) => {
  console.log("props:", props.jPlayersReducer);

  useEffect(() => {
    var myDomEl = $(".jp-play-bar").append("<div class='bullet'></div>");
    console.log(myDomEl);
  }, []);

  return (
    <div className="jp-type-playlist">
      <JPlaylist id={jPlayerOptions.id}>
        <JPlayer className="jp-sleek">
          <Audio />
          <div className="jp-gui jp-interface flex-wrap">
            <div className="jp-controls flex-item">
              <Previous className="jp-previous">
                <i className="ms_play_control" />
              </Previous>
              <Play className="jp-play">
              <i className="ms_play_control" />
              </Play>
              <Next className="jp-next">
                <i className="ms_play_control" />
              </Next>
            </div>
            <div className="jp-progress-container flex-item">
              <div className="jp-time-holder">
                <CurrentTime className="jp-current-time" />
                <Duration className="jp-duration" />
              </div>
              <div className="jp-progress">
                <SeekBar className="jp-seek-bar">
                  {/* <BufferBar className="bullet" /> */}
                  <PlayBar className="jp-play-bar" id="jp-play-bar">
                    <div className="bullet"></div>
                  </PlayBar>
                </SeekBar>
              </div>
            </div>
            <div className="jp-volume-controls flex-item">
              <Mute>
                <i className="fa">{/* Icon set in css */}</i>
              </Mute>
              <div className="jp-volume-slider">
                <div className="jp-volume-bar-container">
                  <VolumeBar />
                </div>
              </div>
              {/* <div className="widget knob-container">
                <div className="knob-wrapper-outer">
                  <div className="knob-wrapper">
                    <div className="knob-mask">
                      <div className="knob d3" style={{ transform: "rotateZ(270deg)" }}>
                        <span />
                      </div>
                      <div className="handle" style={{ transform: "rotateZ(270deg)" }} />
                      <div className="round">
                        <img alt="volume-img" src={VolumeIcon} />
                      </div>
                    </div>
                  </div> 
                </div>
              </div> */}
            </div>
            <div className="jp-toggles flex-item">
              <Shuffle className="jp-shuffle">
                <i className="ms_play_control" />
              </Shuffle>
              <Repeat className="jp-repeat">
                <i className="ms_play_control" />
              </Repeat>
            </div>
            <div className="jp_quality_optn custom_select">
              <select style={{ display: "none" }}>
                <option>quality</option>
                <option value={1}>HD</option>
                <option value={2}>High</option>
                <option value={3}>medium</option>
                <option value={4}>low</option>
              </select>
              <div className="nice-select" tabIndex={0}>
                <span className="current">quality</span>
                <ul className="list">
                  <li data-value="quality" className="option selected">
                    quality
                  </li>
                  <li data-value={1} className="option">
                    HD
                  </li>
                  <li data-value={2} className="option">
                    High
                  </li>
                  <li data-value={3} className="option">
                    medium
                  </li>
                  <li data-value={4} className="option">
                    low
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </JPlayer>
      </JPlaylist>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { jPlayersReducer: state.jPlayers };
};

export default connect(mapStateToProps)(PlayList);
