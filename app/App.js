import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import logo from 'styles/logo.svg';

const App = ({ persistor, store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>app/App.js</code> and save to reload.
        </p>
      </div>
    </PersistGate>
  </Provider>
);


App.propTypes = {
  persistor: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
