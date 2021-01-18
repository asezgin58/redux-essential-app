import {all} from 'redux-saga/effects';
import sagaExample from './sagaExample';

function* rootSaga() {
    yield all([sagaExample()]);
}

export default rootSaga;