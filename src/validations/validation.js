import { emptyOr } from "../utils/null"

export const validateForErrors = (item, rules) => {

    let fieldsToValidate = [];

    for(let field in obj) {
        if (rules[field])
            fieldsToValidate.push(field);
    }

    let errors = [];
    fieldsToValidate.forEach(field => {
        const errorsForField = validateFieldForErrors(item, rules, field);

        if (errorsForField.length > 0) {
            errors = errors.concat(errorsForField);
        }
    });

    return errors;
};

export const validateFieldForErrors = (item, rules, field) => {
    let errors = [];

    const rulesToValidate = rules[field];
    if (rulesToValidate) {
        const value = item[field];
        rulesToValidate.every(ruleToValidate => {
            if (ruleToValidate.testForError(value, item)) {
                errors.push({
                    field, 
                    message: ruleToValidate.message
                });
                return false;
            }
            return true;
        });
    }
    return errors;
};

export const getErrorMessage = (errors, field) => {
    errors = emptyOr(errors, []);
    if (errors.length == 0) return "";
    return emptyOr(errors.filter(error => error.field == field)[0], "");
};