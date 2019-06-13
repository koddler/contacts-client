import { FETCH_GROUPS } from '../actions/groupsAction';

const initialState = {
  groups: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS:
      return { ...state, groups: action.payload };

    default:
      return state;
  }
};
