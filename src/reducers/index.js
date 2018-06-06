import { combineReducers } from  'redux';
import { loggedUser } from './loggedUser';
import { issue } from './issue';

export default combineReducers({
    loggedUser,
    issue,
});
