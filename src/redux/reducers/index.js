import { combineReducers } from "redux";
import AppReducer from "./AppReducer";

const initState = {};
const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
const reducers = combineReducers({ reducer, AppReducer: AppReducer });
export default reducers;
