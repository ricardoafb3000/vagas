const defaultConsideredEmptyValues = [undefined, null, ""];

export const emptyOr = 
(value, defaultValue, consideredEmptyValues = defaultConsideredEmptyValues) => 
    consideredEmptyValues.indexOf(value) == -1 ? value : defaultValue; 

Object.defineProperty(Object.prototype, "n", {
    value: function n(p) {
        const value = this[p];
        if ([null, undefined].indexOf(value) > -1)
            return null;
        return value;
    },
    writable: true,
    configurable: true
});

export const n = (value) => {
    console.log(typeof value)
    console.log("teste")

    return null;
    return emptyOr(value, {
        n: n
    });
};