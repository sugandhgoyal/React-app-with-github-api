import { combineReducers } from 'redux';
import { articleReducer } from './reducers/reducer.article';
import { feedReducer } from './reducers/reducer.feed';

export const rootReducers = combineReducers({
    articleReducer,
    feedReducer,
});