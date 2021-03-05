import express, { Request, Response } from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { App } from '../src/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('build/public'));

app.get('*', (req: Request, res: Response) => {

   const context = {}
   const content = ReactDomServer.renderToString(
      <StaticRouter location={req.url} context={context}>
         <App />
      </StaticRouter>
   );
   const html = `
      <!DOCTYPE html>
      <html>
         <head>
            <meta charset="utf-8" />
            <title>CLient</title>
         </head>
         <body>
            <div id="app">
            ${content}
            </div>
         </body>
      </html>
   `;

   res.send(html);
})

app.listen(PORT, () => {
   console.log(`server SSR is running in port ${PORT}`);
});
