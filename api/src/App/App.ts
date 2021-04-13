import bodyParser from 'body-parser';
import express, { Application } from 'express';
import  MongoDB from '../DB/MongoDB';
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

   public parseBody = (): App => {
      this.app.use(express.json());

      this.app.use(express.urlencoded({ extended: true }));

      return this;
   }

   public initializeControllers = () => {
      this.controllers.forEach((controller) => {
         this.app.use(controller.router);
      });

      return this;
   }

   public  connectToDataBase = (): App => {
      new MongoDB();

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
