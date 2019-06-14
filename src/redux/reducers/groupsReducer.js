import { ADD_GROUP, FETCH_GROUPS, UPDATE_GROUP } from '../actions/groupsAction';

const initialState = {
  groups: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newGroups = [...state.groups, action.payload];
      return { ...state, groups: newGroups };

    case FETCH_GROUPS:
      return { ...state, groups: action.payload };

    case UPDATE_GROUP:
      const updatedGroups = state.groups.map(group => {
        if (group.groupId === action.payload.groupId) return action.payload;

        return group;
      });

      return { ...state, groups: updatedGroups };

    default:
      return state;
  }
};
