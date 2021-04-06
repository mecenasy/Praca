import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";

const Home = Loadable({
   loader: async () => import('../Pages/HomePage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = () => [];

export const homeConfig: PageConfig = {
   url: '/',
   Component: Home,
   exact: true,
}
