 //icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AudiotrackOutlinedIcon from "@material-ui/icons/AudiotrackOutlined";
import { AsyncDiscoverComponent ,AsyncAlbumComponent} from "./views/AsyncComponents";   

const routes = [
  {
    path: "/discover",
    name: "Discover",
    component: AsyncDiscoverComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/albums", name: "Albums", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/artists", name: "Artists", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/genres", name: "Genres", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  {
    path: "/top-tracks",
    name: "Top Tracks",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  {
    path: "/free-music",
    name: "Free Music",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/stations", name: "Stations", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/tracks", name: "tracks", component: AsyncAlbumComponent, icon: AudiotrackOutlinedIcon },
];

export default routes;
