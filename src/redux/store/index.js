import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../saga';

const persistConfig = {
  key: 'root',
  storage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: null
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);
sagaMiddleware.run(sagas)

export { store, persistor };