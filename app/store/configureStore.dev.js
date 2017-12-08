import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import { persistOptions } from 'store/configurePersistence';

export const configureStore = (preloadedState = {}) => {
  const reducer = persistCombineReducers(persistOptions, reducers);

  const store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );

  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducer);
    })
  }

  return { persistor, store };
}
