import { _get, _post, _put, _delete } from '../../utilities/http';

export const ADD_GROUP = 'ADD_GROUP';
export const FETCH_GROUPS = 'FETCH_GROUPS';

const GROUPS_URL = 'http://localhost:5000/api/groups';

export const addGroup = group => dispatch => {
  _post(GROUPS_URL, dispatch, ADD_GROUP, group);
};

export const fetchGroups = () => dispatch => {
  _get(GROUPS_URL, dispatch, FETCH_GROUPS);
};
