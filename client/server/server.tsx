import express from 'express';
import path from 'path';

import { router } from './router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/build', express.static(path.resolve(__dirname, '../build/public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
   console.log(`server SSR is running in port ${PORT}`);
});
