import { IS_FETCHING, SET_ERRORS, SET_IN_EDIT } from "./types";

export const IsFetchingAction = (isFetching) => (
    {
        type: IS_FETCHING,
        newData: isFetching
    }
);
export const SetErrorsAction = (errors) => (
    {
        type: SET_ERRORS,
        newData: errors
    }
);

export const SetInEditAction = (inEdit) => (
    {
        type: SET_IN_EDIT,
        newData: inEdit
    }
);