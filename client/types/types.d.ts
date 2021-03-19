import { StoreEnhancer } from "redux";
import { ApplicationState } from "../src/store/configuration/constants";

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (storeEnhancer: StoreEnhancer) => any;
      __INITIAL_STATE__: ApplicationState;
   }
}
