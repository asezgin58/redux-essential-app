import {createStore, combineReducers, Store, Reducer, applyMiddleware} from 'redux';
import reducers from './_reducers';
import actions from "./_actions";
import {IAction} from "./_actions/type";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleWare();
const rootReducer: Reducer<IStore, IAction> = combineReducers(reducers);
const store: Store<IStore, IAction> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export {store, actions};

declare global {
    type IDispatch = typeof store.dispatch;
}