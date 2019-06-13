import { _get, _post, _put, _delete } from '../../utilities/http';

export const FETCH_GROUPS = 'FETCH_GROUPS';

const GROUPS_URL = 'http://localhost:5000/api/groups';

export const fetchGroups = () => dispatch => {
  _get(GROUPS_URL, dispatch, FETCH_GROUPS);
};
