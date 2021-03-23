import React from "react"; 

import VolumeIcon from "../../assets/images/svg/volume.svg";

const PlayList = (props) => {
  return (
    <div className="jp-type-playlist">
      <div className="jp-gui jp-interface flex-wrap">
        <div className="jp-controls flex-item">
          <button className="jp-previous" tabIndex={0}>
            <i className="ms_play_control" />
          </button>
          <button className="jp-play" tabIndex={0}>
            <i className="ms_play_control" />
          </button>
          <button className="jp-next" tabIndex={0}>
            <i className="ms_play_control" />
          </button>
        </div>
        <div className="jp-progress-container flex-item">
          <div className="jp-time-holder">
            <span className="jp-current-time" role="timer" aria-label="time">
              00:00
            </span>
            <span className="jp-duration" role="timer" aria-label="duration">
              04:27
            </span>
          </div>
          <div className="jp-progress">
            <div className="jp-seek-bar" style={{ width: "100%" }}>
              <div className="jp-play-bar" style={{ width: "0%" }}>
                <div className="bullet"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="jp-volume-controls flex-item">
          <div className="widget knob-container">
            <div className="knob-wrapper-outer">
              <div className="knob-wrapper">
                <div className="knob-mask">
                  <div className="knob d3" style={{ transform: "rotateZ(270deg)" }}>
                    <span />
                  </div>
                  <div className="handle" style={{ transform: "rotateZ(270deg)" }} />
                  <div className="round">
                    <img alt="volume-img" src={VolumeIcon}   />
                  </div>
                </div>
              </div>
              {/* <input></input> */}
            </div>
          </div>
        </div>
        <div className="jp-toggles flex-item">
          <button className="jp-shuffle" tabIndex={0} title="Shuffle">
            <i className="ms_play_control" />
          </button>
          <button className="jp-repeat" tabIndex={0} title="Repeat">
            <i className="ms_play_control" />
          </button>
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
    </div>
  );
};

export default PlayList;
