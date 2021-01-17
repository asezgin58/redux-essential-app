import {FC} from "react";
import {useSelector} from 'react-redux';

/**
 * Component File Description
 */
const Home: FC<any> = () => {
    const author: IAuthor = useSelector<IStore, IAuthor>((store: IStore) => store.author);

    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;