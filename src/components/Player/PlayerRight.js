import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { actions } from "react-jplaylist";

import PlayRightListItem from "./PlayRightListItem";

const playRightListItem = [];

for (var i = 0; i < 7; i++) {
  playRightListItem.push({});
}

const PlayerRight = (props) => {
  const [showQueue, setShowQueue] = useState(false);
  return (
    <div className="jp_queue_wrapper">
      <span className="que_text" id="myPlaylistQueue" onClick={() => setShowQueue(true)}>
        <i className="fa fa-angle-up" aria-hidden="true" /> queue
      </span>
      <div className={showQueue ? "jp-playlist find_li" : "jp-playlist_display_none"}>
        <div className="jp_queue_cls" onClick={() => setShowQueue(false)}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <h2>queue</h2>
        <div
          className="jp_queue_list_inner mCustomScrollbar _mCS_2 mCS-autoHide"
          style={{ height: 345, position: "relative", overflow: "visible" }}
        >
          <div
            id="mCSB_2"
            className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
            tabIndex={0}
            style={{ maxHeight: "none" }}
          >
            <div
              id="mCSB_2_container"
              className="mCSB_container"
              style={{ position: "relative", top: 0, left: 0 }}
              dir="ltr"
            >
              <Scrollbars style={{ height: 345 }}>
                <ul>
                  {props.jPlaylistsReducer.AudioPlaylist.playlist.map((item, index) => {
                    if (props.jPlaylistsReducer.AudioPlaylist.current === index) {
                      return (
                        <PlayRightListItem
                          songIndex={index}
                          item={item}
                          isCurrent={true}
                        />
                      );
                    } else {
                      return (
                        <PlayRightListItem
                          songIndex={index}
                          item={item}
                          isCurrent={false}
                        />
                      );
                    }
                  })}
                </ul>
              </Scrollbars>
            </div>
          </div>
        </div>
        <div className="jp_queue_btn">
          <a
            href="javascript:;"
            className="ms_clear"
            data-toggle="modal"
            data-target="#clear_modal"
            onClick={() => props.clearPlaylist('AudioPlaylist')}
          >
            clear
          </a>
          <a
            href="clear_modal"
            className="ms_save"
            data-toggle="modal"
            data-target="#save_modal"
          >
            save
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { jPlaylistsReducer: state.jPlaylists };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearPlaylist: (id) => dispatch(actions.clear(id)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PlayerRight);
