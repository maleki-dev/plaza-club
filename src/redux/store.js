import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';

const middleWares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWares)));
const persistor = persistStore(store);

export { store, persistor };
