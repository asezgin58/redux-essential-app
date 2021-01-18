import {IAction} from "../type";
import {ISagaExample} from "../../_reducers/sagaExample/type";

export enum sagaExampleActions {
    SET_SAGA = "SET_SAGA",
    SET_SAGA_SUCCESS = "SET_SAGA_SUCCESS",
}

export const setStoreSagaExample = (): any => {
    return {
        type: sagaExampleActions.SET_SAGA
    }
};

export const setStoreSagaExampleSuccess = (payload: ISagaExample): IAction => {
    return {
        type: sagaExampleActions.SET_SAGA_SUCCESS,
        payload
    }
};