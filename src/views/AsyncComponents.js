import Loadable from "react-loadable";
import Loader from "../components/Loader/Loader";

export const AsyncDiscoverComponent = Loadable({
  loader: () => import("./Discover"),
  loading: Loader,
}); 

export const AsyncAlbumComponent = Loadable({
  loader: () => import("./Album"),
  loading: Loader,
}); 
