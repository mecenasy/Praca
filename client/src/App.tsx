import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { homeConfig } from './PageConfigs/homeConfig';
import { counterConfig } from './PageConfigs/counterConfig';
import { userConfig } from './PageConfigs/userConfig';

export const App: FC = () => {
   return (
      <Switch>
         <Route exact path={homeConfig.url} component={homeConfig.component} />
         <Route exact path={counterConfig.url} component={counterConfig.component} />
         <Route exact path={userConfig.url} component={userConfig.component} />
      </Switch>
   );
}

export default App;
