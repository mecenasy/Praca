import express, { Application } from 'express';
import { IController } from '../Interface/IController';
class App {
   constructor() {
      this.port = PORT;
      this.app = express();
      this.controllers = [];
   }

   private static instance: App;
   private port: number;
   private app: Application;
   private controllers: IController[];

   public setController = (controller: IController) => {
      this.controllers.push(controller);

      return this;
   }

   public serverRun = () => {
      this.app.listen(this.port, () => {
         console.log(`Server Api started on port ${this.port}`);
      });
   }

   public initializeControllers = () => {
      this.controllers.forEach((controller) => {
         this.app.use(controller.router);
      });

      return this;
   }

   public static getInstance = () => {
      if (App.instance) {
         return App.instance;
      }

      App.instance = new App();

      return App.instance;
   }
}

export default App;
