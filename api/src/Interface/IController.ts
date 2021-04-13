import { Router } from "express";

export interface IController {
   routePath: string;
   router: Router;
}
