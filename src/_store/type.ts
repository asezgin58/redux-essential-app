import {IAuthor as Author} from "./_reducers/author/type";
import {IUser as User} from "./_reducers/user/type";

declare global {
    type IStore = {
        author: Author,
        users: User[]
    };
    type IAuthor = Author;
    type IUser = User;
}