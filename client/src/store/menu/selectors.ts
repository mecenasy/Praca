import { createSelector } from "reselect";
import { ApplicationState } from "../configuration/constants";
import { Menu, MenuSide, PartsMenu } from "./constants";

export const menuSelector = ({ menu }: ApplicationState) => menu;

export const getMenuSelector = createSelector<ApplicationState, Menu[], PartsMenu>(
   menuSelector,
   (menu) => {
      const leftSide: Menu[] = [];
      const rightSide: Menu[] = [];

      menu.forEach((item) => {
         if (item.menuSide === MenuSide.Left) {
            leftSide.push(item);
         } else {
            rightSide.push(item);
         }
      });

      return {
         leftSide,
         rightSide,
      }
   }
)
