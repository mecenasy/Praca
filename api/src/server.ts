import App from "../src/App/App";
import MenuController from "../src/Controllers/MenuController";

App.getInstance()
   .connectToDataBase()
   .setController(new MenuController)
   .initializeControllers()
   .serverRun();
