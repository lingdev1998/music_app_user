 //icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AudiotrackOutlinedIcon from "@material-ui/icons/AudiotrackOutlined";
import { AsyncDiscoverComponent ,AsyncAlbumComponent} from "./views/AsyncComponents";   

const routes = [
  {
    path: "/app/discover",
    name: "Discover",
    component: AsyncDiscoverComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/app/albums", name: "Albums", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/app/artists", name: "Artists", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/app/genres", name: "Genres", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  {
    path: "/app/top-tracks",
    name: "Top Tracks",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  {
    path: "/app/free-music",
    name: "Free Music",
    component: AsyncAlbumComponent,
    icon: HomeOutlinedIcon,
  },
  { path: "/app/stations", name: "Stations", component: AsyncAlbumComponent, icon: HomeOutlinedIcon },
  { path: "/app/tracks", name: "tracks", component: AsyncAlbumComponent, icon: AudiotrackOutlinedIcon },
];

export default routes;
