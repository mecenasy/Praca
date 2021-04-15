import { AxiosError } from 'axios';

export interface Menu {
   id: number;
   name: string;
   shortName?: string;
   position: number;
   link: string;
   image: string;
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
