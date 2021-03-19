import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import { ApplicationState } from './store/configuration/constants';

interface AppProviderProps {
   store: Store<ApplicationState, AnyAction>
}

const AppProvider: FC<AppProviderProps> = ({
   store,
   children,
}) => (
   <Provider store={store}>
      {children}
   </Provider>
);

export default AppProvider;
