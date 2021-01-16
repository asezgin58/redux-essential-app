import {FC} from "react";
import {useSelector} from 'react-redux';
import {IAuthor} from "../../_store/_reducers";

/**
 * Component File Description
 */
const Home: FC<any> = () => {
    const author: IAuthor = useSelector((store: any) => store.author);

    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;