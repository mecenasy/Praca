import { Router } from 'express';
import { IController } from '../Interface/IController';

abstract class Controller implements IController {
   public routePath: string;
   public router: Router;

   constructor(routePath: string) {
      this.routePath = routePath;
      this.router = Router();
   }
}

export default Controller;
