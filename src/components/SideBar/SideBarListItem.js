import React from "react";
import { NavLink } from "react-router-dom";
import {  withRouter } from "react-router";

import Translation from "../../utils/int8-util";

const SideBarListItem = (props) => {
  return (
    <li>
      <NavLink to={props.path} activeClassName="active" title={props.title}>
        <span className="nav_icon">
          <span className={props.icon} />
        </span>
        <span className="nav_text">{<Translation value={props.navText} />}</span>
      </NavLink>
    </li>
  );
};
export default withRouter(SideBarListItem);
