import React from 'react';
import PropTypes from 'prop-types';

import logo from 'styles/logo.svg';

const Home = ({
  data,
  getEntity,
  isFetching,
  sample,
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{sample}</h1>
    </header>
    <p className="App-intro">
      Action status: {isFetching ? 'fetching' : 'standby'}
    </p>
    {data &&
      <p className="App-intro">Result: {data}</p>
    }
    <button onClick={getEntity}>Fetch entity</button>
  </div>
);

Home.propTypes = {
  data: PropTypes.array,
  getEntity: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  sample: PropTypes.string,
}

export default Home;
