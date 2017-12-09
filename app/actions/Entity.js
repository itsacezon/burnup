import {
  FETCH_ENTITY_REQUEST,
  FETCH_ENTITY_SUCCESS,
} from 'constants/ActionTypes';

export const fetchEntityRequest = () => ({
  type: FETCH_ENTITY_REQUEST,
});

export const fetchEntitySuccess = data => ({
  type: FETCH_ENTITY_SUCCESS,
  data,
});

export const getEntity = () => dispatch => {
  dispatch(fetchEntityRequest());

  setTimeout(() => {
    dispatch(fetchEntitySuccess('Data fetched!'));
  }, 2000);
};
