import authorReducer from './author';
import userReducer from './user';
import sagaExampleReducer from './sagaExample';

const reducers = {
    author: authorReducer,
    users: userReducer,
    sagaExample: sagaExampleReducer
};

export default reducers;