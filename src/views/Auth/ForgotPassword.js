import React from "react"; 
import Translation from "../../utils/int8-util"; 

const SignUp = (props) => {
  return (
    <form className="signup">
      <div className="form-group">
        <input
          type="email"
          className="form-control login-input "
          placeholder="Email..."
        />
      </div>
      <button type="button" className="btnLogin input-button">
        <Translation value="Login" />
      </button>
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-6 col-sm-6">
          <a href="#">
            <p className="text-left pt-2 ml-1">
              <Translation value="SignUp?" />
            </p>
          </a>
        </div>
        <div className="col-6 col-sm-6">
          <a onClick={() => props.setAuthPageStep({text:"Login", step:1})}>
            <p className="text-right pt-2 mr-1">
              <Translation value="LoginNow" />
            </p>
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
