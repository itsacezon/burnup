import {
  FETCH_ENTITY_REQUEST,
  FETCH_ENTITY_SUCCESS,
  FETCH_ENTITY_FAILURE,
} from 'constants/ActionTypes';

const initialState = {
  data: undefined,
  errors: [],
  isFetching: false,
};

const _entity = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTITY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ENTITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_ENTITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export const entity = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ENTITY_REQUEST:
    case FETCH_ENTITY_SUCCESS:
    case FETCH_ENTITY_FAILURE:
      return {
        ...state,
        ..._entity(state, action),
      };
    default:
      return state;
  }
};
