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

import Volume from "./Volume";

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
      title: "Nhớ Người Hay Nhớ",
      artist: "Sofia x Khói x Châu Đăng Khoa(Remix)",
      sources: {
        mp3:
          "https://res.cloudinary.com/linkdoan/video/upload/v1617042245/yt1s.com_-_NH%E1%BB%9A_NG%C6%AF%E1%BB%9CI_HAY_NH%E1%BB%9A_SOFIA_X_KH%C3%93I_X_CH%C3%82U_%C4%90%C4%82NG_KHOA_M%E1%BA%A0NH_LTK_REMIX_5_ul0uu4.mp3",
      },
      free: true,
      poster:
        "https://res.cloudinary.com/linkdoan/image/upload/v1617042862/nnhn_xgufda.png",
    },
    {
      id: 1,
      title: "Có Duyên Không Nợ (Lofi Ver)",
      artist: "NB3 Hoài Bảo x Freak D",
      sources: {
        mp3:
          "https://res.cloudinary.com/linkdoan/video/upload/v1617043723/yt1s.com_-_C%C3%B3_Duy%C3%AAn_Kh%C3%B4ng_N%E1%BB%A3_Lofi_Ver_NB3_Ho%C3%A0i_B%E1%BA%A3o_x_Freak_D_vv1gpm.mp3",
      },
      free: true,
      poster:
        "https://res.cloudinary.com/linkdoan/image/upload/v1617043713/coduyenkhongno_ygt4f0.png",
    },
    {
      id: 2,
      title: "Chẳng Thể Tìm Được Em",
      artist: "PhucXp ft. Freak D",
      sources: {
        mp3:
          "https://res.cloudinary.com/linkdoan/video/upload/v1617043718/yt1s.com_-_Ch%E1%BA%B3ng_Th%E1%BB%83_T%C3%ACm_%C4%90%C6%B0%E1%BB%A3c_Em_PhucXp_ft_Freak_D_Audio_Official_m35lp7.mp3",
      },
      poster:
        "https://res.cloudinary.com/linkdoan/image/upload/v1617043711/ctttdcm_boolsk.png",
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

  useEffect(() => {}, []);

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
            <Volume />
            <div className="jp-toggles flex-item">
              <Shuffle className="jp-shuffle">
                <i className="ms_play_control ms_play_control_selected" />
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
