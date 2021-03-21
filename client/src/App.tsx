import React, { FC } from "react";
import { Route, Switch } from "react-router";
import Loadable from '@react-loadable/revised';
import Loader from './Loader';

const Home = Loadable({
   loader: async () => import('./modules/Pages/Counter'),
   loading: Loader,
});

const User = Loadable({
   loader: async () => import("./modules/Pages/User"),
   loading: Loader,
});

export const App: FC = () => {
   return (
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/user" component={User} />
      </Switch>
   );
}

export default App;
