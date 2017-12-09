import React from 'react';

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

export default Home;
