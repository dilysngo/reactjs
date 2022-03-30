import { combineReducers } from 'redux';
import User from './user/reducer';
import Home from './home/reducer';

export default combineReducers({
  home: Home,
  user: User,
});
