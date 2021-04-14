import { json } from "express";
import App from "../src/App/App";
import MenuController from "../src/Controllers/MenuController";

App.getInstance()
   .setController(new MenuController)
   .setCorse()
   .static()
   .parseBody()
   .connectToDataBase()
   .initializeControllers()
   .serverRun();
