import { combineReducers } from 'redux';

import { currencies } from './currencies';
import {list} from "./list";

const rootReducer = combineReducers({
    currencies,
    list
});

export default rootReducer;