import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { App } from '../src/App';
import { Capture } from '@react-loadable/revised';
import { getBundles, LoadableManifest } from '@react-loadable/revised/webpack';

interface Bundle {
   assets: string[];
   preload: string[];
   prefetch: string[];
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/build', express.static(path.resolve(__dirname, '../build/public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const statsFromFile = fs.readFileSync(path.resolve(__dirname, '../build/react-loadable.json'), { encoding: 'utf-8' });
const stats: LoadableManifest = JSON.parse(statsFromFile);

app.get('/', (req: Request, res: Response) => {
   const context: StaticRouterContext = {}
   const modules: string[] = [];

   const content = ReactDomServer.renderToString(
      <Capture report={moduleName => modules.push(moduleName)} >
         <StaticRouter location={req.url} context={context}>
            <App />
         </StaticRouter>
      </Capture >
   );

   const metaTags = Helmet.renderStatic();
   const bundles = getBundles(stats, modules);

   const generateScripts = ({ assets }: Bundle) => (
      assets
         .map((asset) => `<script type="module" src="${asset}"></script>`)
         .join('')
   );

   const html = `
      <!DOCTYPE html>
      <html>
         <head>
            ${metaTags.title.toString()}
            ${metaTags.meta.toString()}
            ${generateScripts(bundles)}
         </head>
         <body>
            <div id="app">${content}</div>
         </body>
      </html>
   `;

   res.send(html);
});

app.listen(PORT, () => {
   console.log(`server SSR is running in port ${PORT}`);
});
