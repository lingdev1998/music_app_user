import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../../assets/images/open_logo.png";
import GooglePlayIcon from "../../assets/images/google_play.jpg";
import AppStoreIcon from "../../assets/images/app_store.jpg";
import PhoneIcon from "../../assets/images/svg/phone.svg";
import MessageIcon from "../../assets/images/svg/message.svg";
import AddressIcon from "../../assets/images/svg/add.svg";

const Footer = (props) => {
  return (
    <div className="ms_footer_wrapper">
      <div className="ms_footer_logo">
        <Link to="/">
          <img alt="footer-img" src={LogoIcon} />
        </Link>
      </div>
      <div className="ms_footer_inner">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer_box">
              <h1 className="footer_title"> music station</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat duis aute irure dolor.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_app">
              <h1 className="footer_title">Download our App</h1>
              <p>
                Go Mobile with our app.
                <br /> Listen to your favourite songs at just one click. Download Now !
              </p>
              <Link to="/" className="foo_app_btn">
                <img alt="footer-img" src={GooglePlayIcon} className="img-fluid" />
              </Link>
              <Link to="/" className="foo_app_btn">
                <img alt="footer-img" src={AppStoreIcon} className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_subscribe">
              <h1 className="footer_title">subscribe</h1>
              <p>Subscribe to our newsletter and get latest updates and offers.</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <Link to="/" className="ms_btn">
                    sign me up
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_contacts">
              <h1 className="footer_title">contact us</h1>
              <ul className="foo_con_info">
                <li>
                  <div className="foo_con_icon">
                    <img alt="footer-img" src={PhoneIcon} />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">Call us :</span>
                    <span>+84964708429</span>
                  </div>
                </li>
                <li>
                  <div className="foo_con_icon">
                    <img alt="footer-img" src={MessageIcon} />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">email us :</span>
                    <span>
                      <a href="mailto:vandoan1029i@mail.com">vandoan1029i@mail.com</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="foo_con_icon">
                    <img alt="footer-img" src={AddressIcon} />
                  </div>
                  <div className="foo_con_data">
                    <span className="con-title">walk in :</span>
                    <span>Ha Noi - Viet Nam</span>
                  </div>
                </li>
              </ul>
              <div className="foo_sharing">
                <div className="share_title">follow us :</div>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--Copyright--*/}
      <div className="col-lg-12">
        <div className="ms_copyright">
          <div className="footer_border" />
          <p>
            Copyright © 2021 <Link to="/discover">The Music Website</Link>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
