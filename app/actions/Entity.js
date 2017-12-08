import {
  FETCH_ENTITY_REQUEST,
} from 'constants/ActionTypes';

export const fetchEntityRequest = () =>
  dispatch => {
    dispatch({ type: FETCH_ENTITY_REQUEST });
  }
