import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
    notes: notesReducer
});

export default rootReducer;
