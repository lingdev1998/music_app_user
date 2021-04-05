 //icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AudiotrackOutlinedIcon from "@material-ui/icons/AudiotrackOutlined";
import { AsyncDiscoverComponent ,AsyncAlbumComponent} from "./views/AsyncComponents";   

const routes = [
  {
    path: "/music_app_user/discover",
    name: "Discover",
    component: AsyncDiscoverComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/music_app_user/albums", name: "Albums", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/music_app_user/artists", name: "Artists", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/music_app_user/genres", name: "Genres", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  {
    path: "/music_app_user/top-tracks",
    name: "Top Tracks",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  {
    path: "/music_app_user/free-music",
    name: "Free Music",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/music_app_user/stations", name: "Stations", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/music_app_user/tracks", name: "tracks", component: AsyncAlbumComponent, icon: AudiotrackOutlinedIcon },
];

export default routes;
