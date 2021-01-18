import {IAuthor as Author} from "./_reducers/author/type";
import {IUser as User} from "./_reducers/user/type";
import {ISagaExample as SagaExample} from "./_reducers/sagaExample/type";

declare global {
    type IStore = {
        author: Author,
        users: User[],
        sagaExample: SagaExample
    };
    type IAuthor = Author;
    type IUser = User;
    type ISagaExample = SagaExample;
}