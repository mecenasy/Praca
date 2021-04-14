import { Response, Request } from 'express';
import MenuModel, { IMenu } from '../Models/Menu';
import Controller from './Controller';


export class MenuController extends Controller {
   constructor() {
      super('/menu');

      this.initializeRoute();
   }

   public initializeRoute = () => {
      this.router
         .get(this.routePath, this.getMenu)
         .post(this.routePath, this.addMenuItem);

      return this;
   }

   private getMenu = async (req: Request, res: Response) => {
      const menu = await MenuModel
         .find({})
         .sort('position');

      res
         .send(menu)
         .status(200);
   }

   private addMenuItem = async (req: Request, res: Response) => {
      const { name, link, image, position, shortName }: IMenu = req.body;

      if (name && link && image) {
         const existingItem = await MenuModel.findOne({ name });

         if (existingItem) {
            res
               .send({ message: 'menu item exist' })
               .status(400);

            return;
         }

         await MenuModel
            .insertMany({
               name,
               position,
               shortName,
               link,
               image,
            });

         res
            .send({ message: 'menu item added' })
            .status(200);

         return;
      }

      res
         .send({ message: 'data of menu item not complice' })
         .status(400);
   }
}

export default MenuController;
