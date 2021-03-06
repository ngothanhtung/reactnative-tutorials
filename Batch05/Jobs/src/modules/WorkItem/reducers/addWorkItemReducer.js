import * as ActionTypes from '../actions/types';

const defaultState = {
  workitem: null,
  loading: false,
};

const addWorkItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* GET PHOTO ---------------------------------------------------------- */

    case ActionTypes.ADD_WORKITEM_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.ADD_WORKITEM_SUCCESS: {
      return {
        ...state,
        workitem: action.workitem,
        loading: false,
      };
    }

    case ActionTypes.ADD_WORKITEM_ERROR: {
      return {
        ...state,
        workitem: null,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default addWorkItemReducer;
