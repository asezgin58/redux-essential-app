import {FC} from "react";
import {useSelector} from 'react-redux';
import {IAuthor, IStore} from "../../_store";

/**
 * Component File Description
 */
const Home: FC<any> = () => {
    const author: IAuthor = useSelector((store: IStore) => store.author);

    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;