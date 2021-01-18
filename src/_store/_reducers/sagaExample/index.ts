import {sagaExampleActions} from "../../_actions/sagaExample";
import {IAction} from "../../_actions/type";
import {ISagaExample, initialSagaExampleData} from "./type";

const sagaExampleReducer = (state: ISagaExample = initialSagaExampleData, action: IAction): ISagaExample => {
    switch (action.type) {
        case sagaExampleActions.SET_SAGA:
            return {
                ...state,
                ...action.payload,
            };
        case sagaExampleActions.SET_SAGA_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default sagaExampleReducer;