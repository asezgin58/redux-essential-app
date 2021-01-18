import {all, takeEvery, call, put} from "redux-saga/effects";
import {sagaExampleActions, setStoreSagaExampleSuccess} from "../../_actions/sagaExample";
import {fetchSagaExampleApi} from "./_api";

function* fetchSagaExample() { // params
    try {
        // Call Api
        const response = yield call(fetchSagaExampleApi);
        // Response - State update operation
        yield put(setStoreSagaExampleSuccess(response.data));
    } catch (e) {
        // Error
        console.log(e);
    }
}

function* sagaExampleSaga() {
    yield all([takeEvery(sagaExampleActions.SET_SAGA, fetchSagaExample)]);
}

export default sagaExampleSaga;