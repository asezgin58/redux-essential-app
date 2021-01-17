import {store} from "./index";
import {IAuthor as Author} from "./_reducers/author/type";
import {IUser as User} from "./_reducers/user/type";

export type IStore = {
    author: Author,
    users: User[]
}

/** Dispatch Type */
export type IDispatch = typeof store.dispatch;
/** Store Values Types */
export type IAuthor = Author;
export type IUser = User;