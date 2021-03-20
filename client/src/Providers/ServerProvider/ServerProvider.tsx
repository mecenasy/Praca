import React, { FC, createContext } from "react";

export const ServerContext = createContext(false);

const ServerProvider: FC = ({ children }) => {
   if (SERVER_BUILD) {
      return (<ServerContext.Provider value={true}>
         {children}
      </ServerContext.Provider>)
   }

   return (
      <>{children}</>
   )
};

export default ServerProvider;
