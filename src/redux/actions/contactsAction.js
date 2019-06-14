import { _post, _put, _delete } from '../../utilities/http';

export const ADD_CONTACT = 'ADD_CONTACT';

const CONTACTS_URL = 'http://localhost:5000/api/contacts';

export const addContact = contact => dispatch => {
  _post(CONTACTS_URL, dispatch, ADD_CONTACT, contact);
};
