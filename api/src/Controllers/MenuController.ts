import { Response, Request } from 'express';
import  Controller  from './Controller';


export class MenuController extends Controller {
   constructor() {
      super('/menu');

      this.initializeRoute();
   }

   public initializeRoute = () => {
      this.router.get(this.routePath, this.getMenu);

      return this;
   }

   private getMenu = async (req: Request, res: Response) => {
    res.send('menu');
   }
}

export default MenuController;
