import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

export function configureStore(initialState) {
  const middlewares = [];

  const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

  return store;
}
