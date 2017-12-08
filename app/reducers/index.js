import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { entity } from 'reducers/Entity';

export default combineReducers({
  entity,
  router: routerReducer,
});
