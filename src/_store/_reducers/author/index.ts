import {authorActions} from "../../_actions/author";
import {IAction} from "../../_actions/type";
import {IAuthor, initialAuthorData} from "./type";

const authorReducer = (state: IAuthor = initialAuthorData, action: IAction): IAuthor => {
    switch (action.type) {
        case authorActions.SET_AUTHOR:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default authorReducer;