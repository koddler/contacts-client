import { GET_PROGRESS } from '../actions/contactsAction';

const initialState = {
  progressReport: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS:
      return { ...state, progressReport: action.payload };

    default:
      return state;
  }
};
