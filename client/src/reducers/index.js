import { combineReducers } from 'redux';

import auth from './auth';
import datas from './datas';

export const reducers = combineReducers({auth, datas});