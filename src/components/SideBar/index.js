import React, { useState } from "react";
import SideBarListItem from "./SideBarListItem";

import LogoIcon from "../../assets/images/logo.png";
import OpenLogo from "../../assets/images/open_logo.png";
import SideBarData from "../../mock/sideBarData";

const SideBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`ms_sidemenu_wrapper ${isMenuOpen ? "open_menu" : ""}`}>
      <div
        className="ms_nav_close"
        onClick={() => setIsMenuOpen((value) => (value = !value))}
      >
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
      <div className="ms_sidemenu_inner">
        <div className="ms_logo_inner">
          <div className="ms_logo">
            <a href="index-2.html">
              <img alt="slide-bar-img" src={LogoIcon} className="img-fluid" />
            </a>
          </div>
          <div className="ms_logo_open">
            <a href="index-2.html">
              <img alt="slide-bar-img" src={OpenLogo} className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="ms_nav_wrapper">
          {SideBarData.map((list, index) => {
            return (
              <ul key={"sideBarList" + index} className={list.className}>
                {list.routes.map((item, itemIndex) => {
                  return (
                    <SideBarListItem
                      key={"sideBarListItem" + index + "-" + itemIndex}
                      {...item}
                    />
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
