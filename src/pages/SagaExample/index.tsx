import {FC, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setStoreSagaExample} from "../../_store/_actions/sagaExample";

/**
 * Component File Description
 */
const SagaExample: FC<any> = () => {
    const dispatch: IDispatch = useDispatch<IDispatch>();
    const sagaExample: ISagaExample = useSelector<IStore, ISagaExample>((store: IStore) => store.sagaExample);

    useEffect(() => {
        dispatch(setStoreSagaExample());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1>Saga Example Data</h1>

            {sagaExample.data && (
                <div className="rounded mt-4 p-4 border">
                    <pre>{JSON.stringify(sagaExample.data, null, 4)}</pre>
                </div>
            )}
        </>
    );
};

export default SagaExample;