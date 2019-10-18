import { emptyOr } from "../utils/null";

export const rules = {
    "nome": [
        {
            testForError: (value) => emptyOr(value, "").length == 0,
            errorMessage: "O Nome é obrigatório"
        },
        {
            testForError: (value) => emptyOr(value, "").length > 30,
            errorMessage: "O Nome pode ter no máximo 30 caracteres"
        }
    ],
    "niveis": [
        {
            testForError: (value) => emptyOr(value, []).length < 2,
            errorMessage: "Deve ter pelo menos dois Níveis"
        }
    ]
};