import { combineReducers } from 'redux';
import { articleReducer } from './reducers/reducer.article';
import { feedReducer } from './reducers/reducer.feed';
import { headerReducer } from './reducers/reducer.header';
import { listingReducer} from './reducers/reducer.listing';

export const rootReducers = combineReducers({
    articleReducer,
    feedReducer,
    headerReducer,
    listingReducer
});