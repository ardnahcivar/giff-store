import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { GiphyReducer } from './reducer';
import giffSaga  from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;
export const store = createStore(
    GiphyReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(giffSaga)
