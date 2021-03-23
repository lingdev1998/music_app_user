import React from "react";
import { Route, Redirect } from "react-router-dom";
import   { CacheSwitch } from "react-router-cache-route"; 
import routes from "../../../routes";

const PageWrapper = (props) => {
  return ( 
      <CacheSwitch>
        <Redirect exact from="/" to="/discover" />
        {routes.map((route, index) => {
          return <Route key={"routeMain" + index} path={route.path} component={route.component} />;
        })}
      </CacheSwitch> 
  );
};
export default PageWrapper;
