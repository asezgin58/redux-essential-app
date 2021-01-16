import {createStore, combineReducers} from 'redux';
import {userReducer, authorReducer, /*IStoreReducer*/} from './_reducers';

const store: any = createStore(
    combineReducers<any>({
        author: authorReducer,
        users: userReducer
    })
);

export default store;
