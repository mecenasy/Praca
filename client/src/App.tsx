import React, { FC } from "react";
import { Route, Switch } from "react-router";
import Home from './Home';

export const App: FC = () => {
   return (
       <Switch>
         <Route path="/" component={Home} />
      </Switch>
   );
}

export default App;
