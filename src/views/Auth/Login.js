import React from "react"; 
import Translation from "../../utils/int8-util"; 
const Login = (props) => {
  return (
    <form className="signup">
      <div className="form-group">
        <input
          type="email"
          className="form-control login-input "
          placeholder="Email..."
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
          {/* click nut nay, gọi hàm setTrangThai của thằng cha, chuyển trạng thái sang 2 */}
          <a onClick={() => props.setAuthPageStep({ text: "ForgotPassword", step: 2 })}>
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
      <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <a href="#" className="social-button" id="facebook-connect">
          <span>Connect with Facebook</span>
        </a>
        <a href="#" className="social-button" id="google-connect">
          <span>Connect with Google</span>
        </a>
        <a href="#" className="social-button" id="twitter-connect">
          <span>Connect with Twitter</span>
        </a>
      </div>
    </form>
  );
};

export default Login;
