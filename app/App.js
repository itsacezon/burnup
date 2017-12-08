import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import { history } from 'store/configureStore';
import Home from 'components/Home';

const App = ({ persistor, store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

App.propTypes = {
  persistor: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
