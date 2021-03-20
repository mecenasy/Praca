import express, { Request, Response } from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouterContext } from 'react-router';
import { ServerStyleSheet } from 'styled-components';
import { Capture } from '@react-loadable/revised';
import { END } from '@redux-saga/core';
import { App } from '../src/App';
import { getBundles, LoadableManifest } from '@react-loadable/revised/webpack';
import {
   generateHtml,
   getModules,
   getManifest,
} from './helpers';
import AppProvider from '../src/Providers/AppProvider';
import { configureStore } from '../src/store/configuration/configureStore';
import { rootReducerFactory } from '../src/store/configuration/rootReducer';
import { rootSaga } from '../src/store/configuration/rootSaga';
import { incrementByCountRequest } from '../src/store/counter/actions';
import { history } from '../utils/history/history';

const router = express.Router();

const stats: LoadableManifest = getManifest();

router.get('/', async (req: Request, res: Response) => {
   const context: StaticRouterContext = {}
   const modules: string[] = [];
   const sheet = new ServerStyleSheet();

   const { store, rootSagaTask } = await configureStore(undefined, history, rootReducerFactory, rootSaga);

   store.dispatch(incrementByCountRequest(5));

   store.dispatch(END);

   if (rootSagaTask) {
      try {
         await rootSagaTask.toPromise();
      } catch (error) {
         if (error.message === 'ROOT_SAGA_TIMEOUT') {
            console.error(`[TIMEOUT when waiting for sagas to finish`);
         }
         return;
      }
   }

   const app = (
      <Capture report={getModules(modules)} >
         <AppProvider
            store={store}
            url={req.url}
            history={history}
            routerContext={context}
         >
            <App />
         </AppProvider>
      </Capture >
   );

   const body = ReactDomServer.renderToString(sheet.collectStyles(app));

   const metaTags = Helmet.renderStatic();
   const bundlesScripts = getBundles(stats, modules);
   const styles = sheet.getStyleTags();
   const initialState = store.getState();

   const html = generateHtml(body, styles, metaTags, bundlesScripts, initialState);

   res.send(html);
});

export {
   router
}
