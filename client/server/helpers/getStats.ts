import { LoadableManifest } from '@react-loadable/revised/webpack';
import fs from 'fs';
import path from 'path';

export const getManifest = (): LoadableManifest => {
   const statsFromFile = fs.readFileSync(
      path.resolve(__dirname, '../build/react-loadable.json'),
      { encoding: 'utf-8' }
   );

   return JSON.parse(statsFromFile);
}

