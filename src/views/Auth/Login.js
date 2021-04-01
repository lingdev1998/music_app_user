import React from "react";
import Translation from "../../utils/int8-util";
import "./style.scss";

const Login = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto py-4 px-0">
        <div className="form-login-card">
          <div className="card-title text-center">
            <h5 className="mt-5">HEY, THERE</h5>
            <small className="para">
              <Translation value="Logintoyourcoolaccountbelow.?" />
            </small>
          </div>
          <form className="signup">
            <div className="form-group">
              <input
                type="text"
                className="form-control login-input "
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control login-input "
                placeholder="Password"
              />
            </div>
            <button type="button" className="btnLogin input-button">
              <Translation value="Login" />
            </button>
            <div className="row">
              <div className="col-6 col-sm-6">
                <a href="#">
                  <p className="text-left pt-2 ml-1">
                    <Translation value="Forgotpassword?" />
                  </p>
                </a>
              </div>
              <div className="col-6 col-sm-6">
                <a href="#">
                  <p className="text-right pt-2 mr-1">
                    <Translation value="SignUpNow " />
                  </p>
                </a>
              </div>
            </div>
            <span className="text-center">
              <Translation value="Or" />
            </span>
            <span className="text-center pt-3">
              <Translation value="LoginUsing" />
            </span>
            <div className="row">
              <div className="d-flex mx-auto pt-1 pb-3">
                <a href="#">
                  <i className="fab fa-facebook i" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter i" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin i" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
