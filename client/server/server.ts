import express from 'express';
import path from 'path';
import { preloadAll } from '@react-loadable/revised';

import { router } from './router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
   '/build',
   express.static(
      path.resolve(__dirname, '../build/public/')
   ));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

preloadAll().then(() => {
   app.listen(PORT, () => {
      console.log(`Server Client SSR started on port ${PORT}`);
   });
})
