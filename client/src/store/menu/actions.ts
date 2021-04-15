import { Menu, MenuAction, MenuActionType } from "./constants"

import { AxiosError } from 'axios';
export const getMenuRequest = (): MenuAction => ({
   type: MenuActionType.GetMenuRequest
});

export const getMenuSuccess = (menu: Menu[]): MenuAction => ({
   type: MenuActionType.GetMenuSuccess,
   menu,
});

export const getMenuFail = (error: AxiosError): MenuAction => ({
   type: MenuActionType.GetMenuFail,
   error,
});
