import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { redirectMiddleware } from './middlewares/redirect';
import { apiMiddleware } from './middlewares/api/';
import { loggerMiddleware } from './middlewares/logger/';
import { fetchPosts } from './';


// configure & initialize persist reducer
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'posts'
    ]
};

const pReducer = persistReducer( persistConfig, rootReducer );

// export the Redux store
const store = createStore( pReducer, applyMiddleware( 
    redirectMiddleware, 
    loggerMiddleware, 
    apiMiddleware 
));

export default store;

// export store persistor
export const persistor = persistStore( store );


// fetch posts from api
store.dispatch( fetchPosts() );