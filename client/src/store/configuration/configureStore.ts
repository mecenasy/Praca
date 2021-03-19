import { createStore, compose, applyMiddleware,  AnyAction, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ApplicationState, ConfigureStore } from "./constants";
import { onError } from './helpers';

const configureStore: ConfigureStore = (
   initialState,
   reducers,
   rootSaga,
) => {
   const sagaMiddleware = createSagaMiddleware({ onError });

   const middlewares: Middleware[] = [
      sagaMiddleware,
   ];

   if (process.env.NODE_ENV !== 'production') {
      /* eslint @typescript-eslint/no-var-requires: "off" */
      middlewares.unshift(require('redux-immutable-state-invariant').default());
   }

   // If devTools is installed, connect to it
   const windowIfDefined: Window | null = typeof window === 'undefined' ? null : window;
   const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

   const composedMiddlewares = composeEnhancers(
      applyMiddleware(...middlewares),
   );

   const store: Store<ApplicationState, AnyAction> = createStore(
      reducers,
      initialState,
      composedMiddlewares,
   );

   const rootSagaTask = rootSaga && sagaMiddleware.run(rootSaga);

   return { store, rootSagaTask };
};

export { configureStore };
