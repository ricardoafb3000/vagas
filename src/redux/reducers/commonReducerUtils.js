import { IS_FETCHING, SET_ERRORS, SET_IN_EDIT } from "../../client/actions/types";

export const commonInitialState = {
    isFetching: false,
    inEdit: {
        id: ""
    },
    errors: []
};

export const proccessCommonActions = (action) => {
    switch (action.type) {
        case IS_FETCHING: {
            return Object.assign({}, state, {
                isFetching: action.newData
            });
        }
        case SET_ERRORS: {
            return Object.assign({}, state, {
                errors: action.newData
            });
        }
        case SET_IN_EDIT: {
            return Object.assign({}, state, {
                inEdit: action.newData
            });
        }
        default:
            return null;
    }
}
