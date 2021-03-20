import { createBrowserHistory, createMemoryHistory } from 'history'

export const history = SERVER_BUILD
   ? createMemoryHistory()
   : createBrowserHistory()
