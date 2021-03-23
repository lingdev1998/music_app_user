import React, { lazy } from "react"; 
//icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AudiotrackOutlinedIcon from "@material-ui/icons/AudiotrackOutlined";
// import Discover from './views/Discover';
const Discover = lazy(() => import("./views/Discover"));
const Tracks = React.lazy(() => import("./views/Tracks/index"));

const routes = [
  { path: "/discover", name: "Discover", component: Discover, icon: HomeOutlinedIcon },
  { path: "/albums", name: "Albums", component: Discover, icon: HomeOutlinedIcon },
  { path: "/artists", name: "Artists", component: Discover, icon: HomeOutlinedIcon },
  { path: "/genres", name: "Genres", component: Discover, icon: HomeOutlinedIcon },
  { path: "/top-tracks", name: "Top Tracks", component: Discover, icon: HomeOutlinedIcon },
  { path: "/free-music", name: "Free Music", component: Discover, icon: HomeOutlinedIcon },
  { path: "/stations", name: "Stations", component: Discover, icon: HomeOutlinedIcon },
  { path: "/tracks", name: "tracks", component: Tracks, icon: AudiotrackOutlinedIcon },
];

export default routes;
