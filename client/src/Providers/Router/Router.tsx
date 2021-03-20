import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React, { FC } from 'react';
import { StaticRouter, StaticRouterContext } from "react-router";

export interface RouterProps {
   history: History;
   url?: string;
   routerContext?: StaticRouterContext;
}


const Router: FC<RouterProps> = ({
   children,
   history,
   routerContext,
   url,
}) => {
   if (SERVER_BUILD) {
      return (
         <StaticRouter location={url} context={routerContext}>
            {children}
         </StaticRouter>
      );
   }

   return (
      <ConnectedRouter history={history}>
         {children}
      </ConnectedRouter>
   );
};

export default Router;
