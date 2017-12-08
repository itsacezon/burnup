import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'styles';
import App from 'App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
