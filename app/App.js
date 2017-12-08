import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Home from 'components/Home';

const App = ({ persistor, store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    </PersistGate>
  </Provider>
);

App.propTypes = {
  persistor: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
