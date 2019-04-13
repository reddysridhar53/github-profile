import { combineReducers } from 'redux';
import home from './home';
import user from './userDetails';

export default combineReducers({
    home,
    user
});
