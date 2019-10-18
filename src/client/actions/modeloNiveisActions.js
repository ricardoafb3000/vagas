import fetch from 'cross-fetch';
import { MODELO_NIVEIS_SEARCH_RECEIVED, MODELO_NIVEIS_GET_NEW, MODELO_NIVEIS_SEARCH_FOREDIT_RECEIVED } from "./types";
import { IsFetchingAction, SetErrorsAction } from "./commonActions";
import { validateForErrors, validateFieldForErrors } from "../../validations/validation";
import { rules } from "../../validations/modeloNiveisValidationRules";

export const SearchReceivedAction = (items) => (
    {
        type: MODELO_NIVEIS_SEARCH_RECEIVED,
        newData: items
    }
);

export const SearchAction = (filters) => (dispatch) => {
    dispatch(IsFetchingAction(true));

    return fetch(`/api/modelos/niveis/?filters=${new URLSearchParams(filters).toString()}`)
        .then(res => res.json())
        .then(json => {
            dispatch(SearchReceivedAction(json));
            dispatch(IsFetchingAction(false));
        });
};

export const GetNewAction = () => ({
    type: MODELO_NIVEIS_GET_NEW,
    newData: {
        id: -1,
        nome: "Novo modelo de níveis",
        niveis: ["Júnior", "Pleno", "Sênior"]
    }
});

export const SearchForEditReceivedAction = (item) => (
    {
        type: MODELO_NIVEIS_SEARCH_FOREDIT_RECEIVED,
        newData: item
    }
);

export const SearchForEditAction = (id) => (dispatch) => {

    dispatch(IsFetchingAction(true));

    return fetch(`/api/modelos/niveis/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch(SearchForEditReceivedAction(json));
            dispatch(IsFetchingAction(false));
        });
};

export const ValidateFieldAction = (existingErrors, item, field) => (dispatch) => {
    let newErrors = existingErrors.filter(error => error.field != field);

    const errors = validateFieldForErrors(item, rules, field);
    newErrors = newErrors.concat(errors);

    dispatch(SetErrorsAction(newErrors));
};

export const SaveAction = (item) => (dispatch) => {

    const errors = validateForErrors(item, rules);
    if (errors.length > 0) 
        dispatch(SetErrorsAction(errors));
    else {
        dispatch(IsFetchingAction(true));

        return fetch(`/api/modelos/niveis/${id}`, {
            method: "POST",
            body: JSON.stringify(item)
        })
        .catch(err => {
            debugger;
        })
        .then(res => res.json())
        .then(json => {
            dispatch(SearchForEditReceivedAction(json));
            dispatch(IsFetchingAction(false));
        });
    }
};