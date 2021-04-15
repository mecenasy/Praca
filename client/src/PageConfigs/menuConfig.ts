import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";
import { getMenuRequest } from "../store/menu/actions";

const Menu = Loadable({
   loader: async () => import('../Pages/MenuPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = ({
   isHydrated, isMount, isServer
}) => [
      Boolean((isHydrated && isMount) || isServer) && getMenuRequest()
   ];

export const menuConfig: PageConfig = {
   url: '/',
   Component: Menu,
}
