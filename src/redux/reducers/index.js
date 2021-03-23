import { combineReducers } from "redux";

const initState = {};
const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
const reducers = combineReducers({reducer});
export default reducers;
