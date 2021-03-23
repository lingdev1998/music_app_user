import React from "react";
import { Link } from "react-router-dom";

const PlayerRight = (props) => {
  return (
    <div className="jp_queue_wrapper">
      <span className="que_text" id="myPlaylistQueue">
        <i className="fa fa-angle-up" aria-hidden="true" /> queue
      </span>
      <div id="playlist-wrap" className="jp-playlist find_li" style={{ display: "none" }}>
        <div className="jp_queue_cls">
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <h2>queue</h2>
        <div
          className="jp_queue_list_inner mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar"
          style={{ height: 345, position: "relative", overflow: "visible" }}
        >
          <div
            id="mCSB_2"
            className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
            tabIndex={0}
            style={{ maxHeight: 345 }}
          >
            <div
              id="mCSB_2_container"
              className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
              style={{ position: "relative", top: 0, left: 0 }}
              dir="ltr"
            >
              <ul style={{}}>
                <li className="jp-playlist-current">
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link
                      to="/"
                      className="jp-playlist-item jp-playlist-current"
                      tabIndex={0}
                    >
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song1.jpg" />
                      </span>
                      <div className="que_data">
                        Cro Magnon Man{" "}
                        <span className="jp-artist">by Mushroom Records</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link to="/" className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song2.jpg" />
                      </span>
                      <div className="que_data">
                        Your Face <span className="jp-artist">by Ministry</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link to="/" className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song3.jpg" />
                      </span>
                      <div className="que_data">
                        Cyber Sonnet <span className="jp-artist">by You Am I</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link to="/" className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song4.jpg" />
                      </span>
                      <div className="que_data">
                        Tempered Song <span className="jp-artist">by Shelter</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link to="/" className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song5.jpg" />
                      </span>
                      <div className="que_data">
                        Hidden <span className="jp-artist">by Bad Religion</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" href="#">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link
                      to="/"
                      className="jp-playlist-item-remove"
                      style={{ display: "none" }}
                    >
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song6.jpg" />
                      </span>
                      <div className="que_data">
                        Lentement <span className="jp-artist">by Apollo 440</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song7.jpg" />
                      </span>
                      <div className="que_data">
                        Lismore <span className="jp-artist">by Bloodhound Gang</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song8.jpg" />
                      </span>
                      <div className="que_data">
                        The Separation{" "}
                        <span className="jp-artist">by Friendly Fires </span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song9.jpg" />
                      </span>
                      <div className="que_data">
                        Beside Me <span className="jp-artist">by Friendly Fires </span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song2.jpg" />
                      </span>
                      <div className="que_data">
                        Bubble <span className="jp-artist">by Skunkhour</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song2.jpg" />
                      </span>
                      <div className="que_data">
                        Stirring of a fool{" "}
                        <span className="jp-artist">by The Meanies</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song2.jpg" />
                      </span>
                      <div className="que_data">
                        Partir <span className="jp-artist">by The Living End</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Link className="jp-playlist-item-remove" style={{ display: "none" }}>
                      ×
                    </Link>
                    <Link className="jp-playlist-item" tabIndex={0}>
                      <span className="que_img">
                        <img alt="play-right-img" src="images/weekly/song2.jpg" />
                      </span>
                      <div className="que_data">
                        Thin Ice <span className="jp-artist">by Screaming Trees</span>
                      </div>
                    </Link>
                    <div className="action">
                      <span className="que_more">
                        <img alt="play-right-img" src="images/svg/more.svg" />
                      </span>
                      <span className="que_close">
                        <img alt="play-right-img" src="images/svg/close.svg" />
                      </span>
                    </div>
                  </div>
                  <ul className="more_option">
                    <li className="jp-playlist-current">
                      <Link to="/">
                        <span className="opt_icon" title="Add To Favourites">
                          <span className="icon icon_fav" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Queue">
                          <span className="icon icon_queue" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Download Now">
                          <span className="icon icon_dwn" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Add To Playlist">
                          <span className="icon icon_playlst" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="opt_icon" title="Share">
                          <span className="icon icon_share" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="mCSB_2_scrollbar_vertical"
            className="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal mCSB_scrollTools_vertical"
            style={{ display: "none" }}
          >
            <div className="mCSB_draggerContainer">
              <div
                id="mCSB_2_dragger_vertical"
                className="mCSB_dragger"
                style={{ position: "absolute", minHeight: 50, top: 0 }}
              >
                <div className="mCSB_dragger_bar" style={{ lineHeight: 50 }} />
              </div>
              <div className="mCSB_draggerRail" />
            </div>
          </div>
        </div>
        <div className="jp_queue_btn">
          <Link className="ms_clear" data-toggle="modal" data-target="#clear_modal">
            clear
          </Link>
          <Link
            href="clear_modal.html"
            className="ms_save"
            data-toggle="modal"
            data-target="#save_modal"
          >
            save
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerRight;
