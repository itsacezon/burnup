import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import 'styles';
import App from 'App';
import { configureStore } from 'store/configureStore'
import registerServiceWorker from 'utils/registerServiceWorker';

const { persistor, store } = configureStore();

render(
  <App persistor={persistor} store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
