import React from "react";
import Translation from "../../utils/int8-util";
import { Row, Col } from "reactstrap";

const Login = (props) => {
  return (
    <Row
      className="row"
      style={{
        height: "100%",
        width: "100%",
        background: "linear-gradient(to right,#556270 0%, #ff6b6b 100%)",
      }}
    >
      <Col
        className="col-md-6 col-xs-12 col-sm-12 mx-auto py-4 px-0"
        style={{ display: "flex" }}
      >
        <div className="form-login-card">
          <div className="card-title text-center">
            <h5 className="mt-5">
              <Translation value="Login" />
            </h5>
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
            <div className="row" style={{ marginTop: "15px" }}>
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
            <div className="row" style={{marginRight:"0px", marginLeft:"0px"}}>
              <a href="#" class="social-button" id="facebook-connect">
                <span>Connect with Facebook</span>
              </a>
              <a href="#" class="social-button" id="google-connect">
                <span>Connect with Google</span>
              </a>
              <a href="#" class="social-button" id="twitter-connect">
                <span>Connect with Twitter</span>
              </a> 
            </div>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
