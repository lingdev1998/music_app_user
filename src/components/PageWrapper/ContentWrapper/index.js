import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { CacheSwitch } from "react-router-cache-route";
import LoginPage from "../../../views/Auth";
import routes from "../../../routes";
import OAuth2RedirectHandler from "../../../utils/OAuth2Handler";

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
              component={route.component}
              exact
            />
          );
        })}
        <Route
          path="/app/oauth2/redirect"
          key={"/app/oauth2/redirect" + 1}
          component={OAuth2RedirectHandler}
        ></Route>
      </CacheSwitch>
    </>
  );
};
export default withRouter(PageWrapper);
