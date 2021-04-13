import express from 'express';
import { IController } from '../Interface/IController';

abstract class Controller implements IController {
   public routePath: string;
   public router: express.Router;

   constructor(routePath: string) {
      this.routePath = routePath;
      this.router = express.Router();
   }
}

export default Controller;
