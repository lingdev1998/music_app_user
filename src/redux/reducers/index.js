import { combineReducers } from "redux";
import appReducer from "./appReducer"; 

import { reducer as jPlayers } from "react-jplayer";
import { reducer as jPlaylists } from "react-jplaylist";

const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
const reducers = combineReducers({
  reducer,
  appReducer: appReducer,
  jPlayers :jPlayers,
  jPlaylists:jPlaylists,
});
export default reducers;
