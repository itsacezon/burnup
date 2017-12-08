import localForage from 'localforage';

export const persistOptions = {
  key: 'root',
  storage: localForage,
  blacklist: [],
  whitelist: [],
};
