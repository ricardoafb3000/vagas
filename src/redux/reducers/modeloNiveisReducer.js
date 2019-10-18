import { MODELO_NIVEIS_SEARCH_RECEIVED, MODELO_NIVEIS_GET_NEW, MODELO_NIVEIS_SEARCH_FOREDIT_RECEIVED } from "../../client/actions/types";
import { commonInitialState, proccessCommonActions } from "./commonReducerUtils";

const initialState = {
    ...commonInitialState,
    items: [],
    inEdit: {
        id: -1,
        nome: "Novo modelo de níveis",
        niveis: ["Júnior", "Pleno", "Sênior"]
    }
};

export default (state = initialState, action) => {
    const commontState = proccessCommonActions(action);
    if (commontState)
        return commontState;
    
    switch (action.type) {
        case MODELO_NIVEIS_SEARCH_RECEIVED: {
            return Object.assign({}, state, {
                items: action.newData
            });
        }
        case MODELO_NIVEIS_GET_NEW:
        case MODELO_NIVEIS_SEARCH_FOREDIT_RECEIVED: {
            return Object.assign({}, state, {
                inEdit: action.newData
            });
        }
        default:
            return state;
    }
};