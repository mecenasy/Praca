import { initialState, MenuAction, MenuActionType, MenuState } from "./constants";

export const menuReducer = (state: MenuState = initialState, action: MenuAction): MenuState => {
   switch (action.type) {
      case MenuActionType.GetMenuSuccess: {
         return action.menu;
      }
      default: {
         return state;
      }
   }
}
