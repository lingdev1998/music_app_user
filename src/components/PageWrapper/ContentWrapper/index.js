import React from "react";
import { Switch, Route, withRouter } from 'react-router';
import { CacheSwitch } from "react-router-cache-route";
import LoginPage from "../../../views/Auth";
import routes from "../../../routes";

const PageWrapper = (props) => {
  return (
    <>
      <LoginPage />
      <CacheSwitch>
        {/* <Redirect from="/" to="/discover" /> */}
        {routes.map((route, index) => {
          return (
            <Route
              key={"routeMain" + index}
              path={route.path}
              component={route.component} exact
            />
          );
        })}
      </CacheSwitch>
    </>
  );
};
export default withRouter(PageWrapper);
