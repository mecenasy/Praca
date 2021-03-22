import React, { createContext, FC, useCallback } from "react";
import { AnyAction } from "redux";

export const ActionContext = createContext({})

export const ActionProvider: FC<{ actions: AnyAction[] }> = (
   { actions,
      children
   }) => {
   const setActions = useCallback((a: AnyAction[]) => {
      if (actions) {
         actions.push(...a)
      }
   }, [actions])

   return (
      <ActionContext.Provider value={{ setActions }} >
         {children}
      </ActionContext.Provider>
   )
}
