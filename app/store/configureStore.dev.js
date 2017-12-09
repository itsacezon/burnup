import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from 'reducers';
import { persistOptions } from 'store/configurePersistence';

export const history = createHistory();

export const configureStore = (preloadedState = {}) => {
  const reducer = persistCombineReducers(persistOptions, reducers);

  const store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );

  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default // eslint-disable-line
      store.replaceReducer(persistReducer(persistOptions, nextReducer));
    })
  }

  return { persistor, store };
}
