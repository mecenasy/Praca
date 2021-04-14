import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import AppProvider from "./Providers/AppProvider";
import { configureStore } from "./store/configuration/configureStore";
import { rootReducerFactory as rootReducerFactory } from "./store/configuration/rootReducer";
import { rootSaga } from "./store/configuration/rootSaga";
import { ApplicationState } from "./store/configuration/constants";
import { preloadReady } from '@react-loadable/revised';
import { history } from "../utils/history/history";

const renderApplication = async () => {
   const preloadPromise = preloadReady();
   const initialState: ApplicationState = window.__INITIAL_STATE__;

   const { store } = await configureStore(initialState, history, rootReducerFactory, rootSaga);

   await preloadPromise;

   ReactDOM.hydrate(
      <AppProvider store={store} history={history}>
         <App />
      </AppProvider>,
      document.getElementById("app"),
   );
};

renderApplication();
