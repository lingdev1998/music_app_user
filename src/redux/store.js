import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import reducers from "./reducers"; 

export function configureStore(initialState) {
  const middlewares = [logger];

  const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

  return store;
}
