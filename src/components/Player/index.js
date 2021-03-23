import React from "react";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";
import PlayList from "./PlayList";  

const PlayerWrapper = (props) => {
  return (
    <div className="ms_player_wrapper">
      <div className="ms_player_close">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
      <div className="player_mid">
        <div className="audio-player">
          <div
            id="jquery_jplayer_1"
            className="jp-jplayer"
            style={{ width: 0, height: 0 }}
          >
            <img
              alt="jp_player-img"
              id="jp_poster_0"
              style={{ width: 0, height: 0, display: "none" }}
            />
            <audio
              id="jp_audio_0"
              preload="metadata"
              src="http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
              title="Cro Magnon Man"
            />
          </div>
          <div
            id="jp_container_1"
            className="jp-audio"
            role="application"
            aria-label="media player"
          >
            {/*--Left Queue--*/}
            <PlayerLeft />
            {/*--Right Queue--*/}
            <PlayerRight />
            {/*--PalyList Queue--*/}
            <PlayList/>
          </div>
        </div>
      </div>
      {/*main div*/}
    </div>
  );
};
export default PlayerWrapper;
