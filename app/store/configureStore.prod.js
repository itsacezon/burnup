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
    )
  );

  const persistor = persistStore(store);

  return { persistor, store };
}
