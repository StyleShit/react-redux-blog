import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';


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
const store = createStore( pReducer );
export default store;

// export store persistor
export const persistor = persistStore( store );