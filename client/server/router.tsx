import express, { Request, Response } from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { ServerStyleSheet } from 'styled-components';
import { Capture } from '@react-loadable/revised';
import { App } from '../src/App';
import { getBundles, LoadableManifest } from '@react-loadable/revised/webpack';
import {
   generateHtml,
   getModules,
   getManifest,
} from './helpers';

const router = express.Router();

const stats: LoadableManifest = getManifest();

router.get('/', (req: Request, res: Response) => {
   const context: StaticRouterContext = {}
   const modules: string[] = [];
   const sheet = new ServerStyleSheet();

   const app = (
      <Capture report={getModules(modules)} >
         <StaticRouter location={req.url} context={context}>
            <App />
         </StaticRouter>
      </Capture >
   );

   const body = ReactDomServer.renderToString(sheet.collectStyles(app));

   const metaTags = Helmet.renderStatic();
   const bundlesScripts = getBundles(stats, modules);
   const styles = sheet.getStyleTags();

   const html = generateHtml(body, styles, metaTags, bundlesScripts);

   res.send(html);
});

export {
   router
}
