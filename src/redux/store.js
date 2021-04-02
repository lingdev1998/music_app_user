import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

export function configureStore(initialState) {
  const middlewares = [logger, thunk];

  const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

  return store;
}
