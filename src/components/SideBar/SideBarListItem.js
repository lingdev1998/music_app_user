import React  from "react";
import { Link } from "react-router-dom";
import Translation from "../../utils/int8-util";

const SideBarListItem = (props) => {
  return (
    <li>
      <Link
        to={props.path}
        className={props.isActive ? "active" : ""}
        title={props.title}
      >
        <span className="nav_icon">
          <span className={props.icon} />
        </span>
        <span className="nav_text">{<Translation value={props.navText} />}</span>
      </Link>
    </li>
  );
};
export default SideBarListItem;
