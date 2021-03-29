import React from "react";
import { connect } from "react-redux";
import { actions } from "react-jplaylist";

import MoreSVG from "../../assets/images/svg/more.svg";
import CloseSVG from "../../assets/images/svg/close.svg";

const PlayRightListItem = (props) => {
  if (props.isCurrent) {
    console.log("sda" + props.item.title);
  }
  return (
    <li className={props.isCurrent ? "jp-playlist-current" : ""} key={"PlayRightListItem" + props.index}>
      <div>
        <a
          href="javascript:;"
          className="jp-playlist-item-remove"
          style={{ display: "none" }}
        >
          ×
        </a>
        <a
          href="javascript:;"
          className={
            props.isCurrent ? "jp-playlist-item jp-playlist-current" : "jp-playlist-item"
          }
          onClick={() => props.play("AudioPlaylist",props.songIndex)}
        >
          <span className="que_img">
            <img style={{ width: "50px", height: "55px" }} src={props.item.poster} />
          </span>
          <div className="que_data">
            {props.item.title}
            <span className="jp-artist">{props.item.artist}</span>
          </div>
        </a>
        <div className="action">
          <span className="que_more">
            <img src={MoreSVG} />
          </span>
          <span className="que_close">
            <img src={CloseSVG} />
          </span>
        </div>
      </div>
      <ul className="more_option">
        <li className="jp-playlist-current">
          <a href="#">
            <span className="opt_icon" title="Add To Favourites">
              <span className="icon icon_fav" />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="opt_icon" title="Add To Queue">
              <span className="icon icon_queue" />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="opt_icon" title="Download Now">
              <span className="icon icon_dwn" />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="opt_icon" title="Add To Playlist">
              <span className="icon icon_playlst" />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="opt_icon" title="Share">
              <span className="icon icon_share" />
            </span>
          </a>
        </li>
      </ul>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (id, time) => dispatch(actions.play(id, time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayRightListItem);
