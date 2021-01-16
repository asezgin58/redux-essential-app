import authorReducer from './author';
import userReducer from './user';
import {IAuthor as Author} from "./author/type";
import {IUser as User} from "./user/type";
import {IStoreReducer as StoreReducer} from "./type";

export {
    authorReducer,
    userReducer
}

export type IAuthor = Author;
export type IUser = User;
export type IStoreReducer = StoreReducer;