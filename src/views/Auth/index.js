import React, { useState } from "react"; 
import { 
  Modal, 
  ModalBody, 
} from "reactstrap";
import { connect } from "react-redux";

import { setCloseLoginModal } from "../../redux/reducers/appReducer";
import Translation from "../../utils/int8-util";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const AuthPage = (props) => {
  const [authPageStep, setAuthPageStep] = useState({ step: 1, text: "Login" });

  return (
    <div className="form-login-card">
      <div className="login-title">
        <h4 className="w-100 text-center">
          <Translation value={authPageStep.text} />
        </h4>
        <div className="s">
          <button onClick={() => props.setCloseLoginModal()} className="btn btn-primary">
            x
          </button>
        </div>
      </div>
      {authPageStep.step === 1 ? (
        <Login setAuthPageStep={setAuthPageStep} />
      ) : authPageStep.step === 2 ? (
        <ForgotPassword setAuthPageStep={setAuthPageStep} />
      ) : (
        ""
      )}
    </div>
  );
};

const AuthPageModal = (props) => {
  return (
    <Modal style={{zIndex:"100000"}} isOpen={props.loginModalShow} centered unmountOnClose={true}>
      <ModalBody>
        <AuthPage setCloseLoginModal={props.setCloseLoginModal} />
      </ModalBody>
    </Modal>
  );
};
const mapStateToProps = (state) => ({ ...state.appReducer });

const mapDispatchToProps = (dispatch) => ({
  setCloseLoginModal: () => dispatch(setCloseLoginModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageModal);
