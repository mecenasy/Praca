import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom';
import AppProvider from "./AppProvider";
import { configureStore } from "./store/configuration/configureStore";
import { rootReducer } from "./store/configuration/rootReducer";
import { rootSaga } from "./store/configuration/rootSaga";
import { ApplicationState } from "./store/configuration/constants";

const initialState: ApplicationState = window.__INITIAL_STATE__;

const { store } = configureStore(initialState, rootReducer, rootSaga);

ReactDOM.hydrate(
   <BrowserRouter>
      <AppProvider store={store}>
         <App />
      </AppProvider>
   </BrowserRouter>,
   document.getElementById("app"),
);

