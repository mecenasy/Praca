import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";
import { incrementByCountRequest } from '../store/counter/actions';

const Counter = Loadable({
   loader: async () => import('../Pages/CounterPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = (
   { isHydrated, isMount, isServer, isUpdate },
   location,
   match,
) => {
   console.log("🚀 match", match);
   console.log("🚀 location", location);

   return ([
      Boolean(isServer || (isMount && isHydrated)) && incrementByCountRequest(50),
      Boolean(isServer) && { type: 'IS_SERVER' },
      Boolean(isMount) && { type: 'IS_MOUNT' },
      Boolean(isMount && isHydrated) && { type: 'IS_MOUNT_AND_IS_HYDRATED' },
      Boolean(isUpdate) && { type: 'IS_UPDATE' },
   ]);
};

export const counterConfig: PageConfig = {
   url: '/counter',
   Component: Counter,
}
