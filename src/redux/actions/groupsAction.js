import { _get, _post, _put, _delete } from '../../utilities/http';

export const ADD_GROUP = 'ADD_GROUP';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const GROUPS_URL = 'http://localhost:5000/api/groups';

export const addGroup = group => dispatch => {
  _post(GROUPS_URL, dispatch, ADD_GROUP, group);
};

export const fetchGroups = () => dispatch => {
  _get(GROUPS_URL, dispatch, FETCH_GROUPS);
};

export const updateGroup = group => dispatch => {
  let url = GROUPS_URL + '/' + group.groupId;
  _put(url, dispatch, UPDATE_GROUP, group);
};

export const removeGroup = id => dispatch => {
  let url = GROUPS_URL + '/' + id;
  _delete(url, dispatch, REMOVE_GROUP);
};
