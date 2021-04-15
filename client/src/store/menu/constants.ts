import { AxiosError } from 'axios';

export enum MenuSide {
   Left = 'left',
   Right = 'right',
}

export interface PartsMenu {
   leftSide: Menu[];
   rightSide: Menu[];
}

export interface Menu {
   name: string;
   shortName?: string;
   menuSide: MenuSide;
   position: number;
   link: string;
   image: string;
   hidden?: boolean;
}

export type MenuState = Menu[];
export enum MenuActionType {
   GetMenuRequest = 'menu/GET_MENU_REQUEST',
   GetMenuSuccess = 'menu/GET_MENU_SUCCESS',
   GetMenuFail = 'menu/GET_MENU_FAIL',
}

export type MenuAction = {
   type: MenuActionType.GetMenuRequest;
} | {
   type: MenuActionType.GetMenuSuccess;
   menu: Menu[];
} | {
   type: MenuActionType.GetMenuFail;
   error: AxiosError;
}

export const initialState: Menu[] = [];
