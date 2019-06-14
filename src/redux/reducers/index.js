import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import groupsReducer from './groupsReducer';

export default combineReducers({
  form: formReducer,
  groupsReducer: groupsReducer
});
