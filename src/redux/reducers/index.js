import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contactsReducer from './contactsReducer';
import groupsReducer from './groupsReducer';

export default combineReducers({
  form: formReducer,
  groupsReducer: groupsReducer,
  contactsReducer: contactsReducer
});
