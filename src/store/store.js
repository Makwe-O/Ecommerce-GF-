import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/rootReducer';

const middlewares = [logger, thunk];

const allStoreEnhancers = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : a => a
);

export const store = createStore(reducers, allStoreEnhancers);

export const persistor = persistStore(store);
