import { combineReducers } from 'redux';
import { articleReducer } from './reducers/reducer.article';

export const rootReducers = combineReducers({
    articleReducer,
});