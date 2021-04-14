import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import  MongoDB from '../DB/MongoDB';
import { IController } from '../Interface/IController';
class App {
   constructor() {
      this.app = express();
      this.controllers = [];
   }

   private static instance: App;
   private app: Application;
   private controllers: IController[];

   public setController = (controller: IController) => {
      this.controllers.push(controller);

      return this;
   }

   public serverRun = () => {
      this.app.listen(PORT, () => {
         console.log(`Server Api started on port ${PORT}`);
      });
   }

   public parseBody = (): App => {
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());

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

   public setCorse = (): App => {
      this.app.use(cors({
         origin: CORS_ORIGIN_PATH,
         optionsSuccessStatus: 200,
         credentials: true,
      }));

      return this;
   }

   public  static = (): App => {
      this.app.use(
         '/assets',
         express.static(
           path.resolve(__dirname, '../assets'),
         ),
      );
      return this;
   }

   public cookieParser = (): App => {
      this.app.use(cookieParser());
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
