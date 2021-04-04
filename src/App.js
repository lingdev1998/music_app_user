import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { createHashHistory as createHistory } from "history";

import { configureStore } from "./redux/store";
import Loader from "./components/Loader/Loader";
import Layout from "./layouts/index";

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./assets/scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const loading = () => <Loader />;

const history = createBrowserHistory();

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/app/discover" />} />
            <Route path="/app" exact render={() => <Redirect to="/app/discover" />} />
            <Route path="/app" dispatch={props.dispatch} component={Layout} />
            {/* <Route
              path="/app/oauth2/redirect"
              key={"/app/oauth2/redirect" + 1}
              component={OAuth2RedirectHandler}
            ></Route> */}
            {/* <Route path="/documentation" exact
                           render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
                    <Route path="/documentation" component={DocumentationLayoutComponent}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/> 
                    <Route path="/error" exact component={ErrorPage}/> */}
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};
export default App;
