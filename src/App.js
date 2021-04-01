import React from "react";
import Login from './views/Auth/Login';
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import { createHashHistory as createHistory } from "history";
import Loader from "./components/Loader/Loader";
import Layout from "./layouts/index";
import Login from "./views/Auth/Login";

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./assets/scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const loading = () => <Loader />;

const history = createHistory();

const store = configureStore();

console.log(store);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            {/* <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} /> */}
            <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
