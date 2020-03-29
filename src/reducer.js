// reducer.js
import {combineReducers} from 'redux';
import {reducer as data} from './reducer/data/data.js';
import {reducer as wtw} from './reducer/wtw/wtw.js';
import {reducer as user} from './reducer/user/user.js';
import NameSpace from './reducer/name-space/name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MOVIE]: wtw,
  [NameSpace.USER]: user,
});
