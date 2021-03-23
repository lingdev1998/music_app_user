import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Translation from "../../../utils/int8-util";

import SearchIcon from "../../../assets/images/svg/search.svg";
import LanguageIcon from "../../../assets/images/svg/lang.svg";

const Header = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState({
    languageName: "English",
    languageShortName: "en",
  });

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage.languageShortName);
  }, [currentLanguage.languageShortName]);

  const menu = () => (
    <Menu>
      <Menu.Item key="0">
        <Link
          onClick={() => {
            setCurrentLanguage({ languageName: "English", languageShortName: "en" });
          }}
        >
          English
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link
          onClick={() => {
            setCurrentLanguage({ languageName: "Tiếng Việt", languageShortName: "vi" });
          }}
        >
          Tiếng Việt
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="ms_header">
      <div className="ms_top_left">
        <div className="ms_top_search">
          <input type="text" className="form-control" placeholder={t("Search") + "..."} />
          <span className="search_icon">
            <img alt="heade-img" src={SearchIcon} />
          </span>
        </div>
        <div className="ms_top_trend">
          <span>
            <Link to="/" className="ms_color">
              Trending Songs :
            </Link>
          </span>
          <span className="top_marquee">
            <Link to="/">
              Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8
              More)
            </Link>
          </span>
        </div>
      </div>
      <div className="ms_top_right">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="ms_top_lang">
            <span>
              {currentLanguage.languageName} <img alt="heade-img" src={LanguageIcon} />
            </span>
          </div>
        </Dropdown>
        <div className="ms_top_btn">
          <Link to="/" className="ms_btn reg_btn">
            <span>
              <Translation value="register" />
            </span>
          </Link>
          <Link to="/" className="ms_btn login_btn">
            <span>
              <Translation value="login" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
