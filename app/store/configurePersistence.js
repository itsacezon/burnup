import { persistStore } from 'redux-persist';
import localForage from 'localforage';

export const configurePersistence = store => {
  const options = {
    storage: localForage,
    whitelist: [],
  };
  persistStore(store, options);
}
