import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';


// combine all reducers and export them as one
const rootReducer = combineReducers({
    posts: postsReducer 
});

export default rootReducer;