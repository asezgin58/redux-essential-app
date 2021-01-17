import {createStore, combineReducers, Store, Reducer} from 'redux';
import reducers from './_reducers';
import actions from "./_actions";
import {IAction} from "./_actions/type";
import {IStore} from "./type";

const rootReducer: Reducer<IStore, IAction> = combineReducers(reducers);
const store: Store<IStore, IAction> = createStore(rootReducer);

export {store, actions};