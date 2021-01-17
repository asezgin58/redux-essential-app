import {createStore, combineReducers, Store, Reducer} from 'redux';
import {userReducer, authorReducer} from './_reducers';
import {IAction} from "./_actions/type";
import {IAuthor as Author} from "./_reducers/author/type";
import {IUser as User} from "./_reducers/user/type";

export type IStore = {
    author: Author,
    users: User[]
}

const rootReducer: Reducer<IStore, IAction> = combineReducers({
    author: authorReducer,
    users: userReducer
});
const store: Store<IStore, IAction> = createStore(rootReducer);

export type IDispatch = typeof store.dispatch;
export type IAuthor = Author;
export type IUser = User;
export {store};