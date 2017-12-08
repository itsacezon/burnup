import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import { configurePersistence } from 'store/configurePersistence';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddlerware(thunk),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );

  configurePersistence(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    })
  }

  return store;
}
