import express, { Request, Response } from 'express';
import path from 'path';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';
import { App } from '../src/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/build', express.static(path.resolve(__dirname, '../build/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
   const context = {}

   const content = ReactDomServer.renderToString(
      <StaticRouter location={req.url} context={context}>
         <App />
      </StaticRouter>
   );

   const metaTags = Helmet.renderStatic();

   const html = `
      <!DOCTYPE html>
      <html>
         <head>
            ${metaTags.title.toString()}
            ${metaTags.meta.toString()}
            <script type="module" src="build/client_bundle.js" ></script>
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
