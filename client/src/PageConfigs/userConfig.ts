import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";

const User = Loadable({
   loader: async () => import('../Pages/UserPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = () => [];

export const userConfig: PageConfig = {
   url: '/user',
   Component: User,
}
