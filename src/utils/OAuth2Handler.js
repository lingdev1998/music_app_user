import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginSuccess, loginFailure } from "../redux/reducers/authReducer";

const ACCESS_TOKEN = "accessToken";

const OAuth2RedirectHandler = (props) => {
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(props.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    props.loginSuccess(token);
    return (
      <Redirect
        to={{
          pathname: "/app/albums",
          state: { from: props.location },
        }}
      />
    );
  } else {
    props.loginFailure(token);
    return (
      <Redirect
        to={{
          pathname: "/app/discover",
          state: {
            from: props.location,
            error: error,
          },
        }}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (token) => dispatch(loginSuccess(token)),
    loginFailure: () => dispatch(loginFailure()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OAuth2RedirectHandler);
