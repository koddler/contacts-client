import { _postForm, _put, _delete } from '../../utilities/http';

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

const CONTACTS_URL = 'http://localhost:5000/api/contacts';

export const addContact = contact => dispatch => {
  let data = new FormData();
  for (let key in contact) {
    data.append(key, contact[key]);
  }

  _postForm('http://localhost:5000/api/image', dispatch, ADD_CONTACT, data);
};

export const removeContact = id => dispatch => {
  let url = CONTACTS_URL + '/' + id;
  _delete(url, dispatch, REMOVE_CONTACT);
};

export const updateContact = contact => dispatch => {
  let url = CONTACTS_URL + '/' + contact.contactId;
  _put(url, dispatch, UPDATE_CONTACT, contact);
};
