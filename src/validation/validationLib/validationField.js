/**
 * validationField(field, [array])
 * field a parameter that comes through validation(values)
 * [array] arrays of rules for validation view in utilities files
 */
export function validationField(field, arrayOfValidationFunction) {
    const arrayOfValidationFunctionInvok = arrayOfValidationFunction.map((fn) => fn(field));
    const arrayOfValidationFunctionMessages = arrayOfValidationFunctionInvok.filter(
        (item) => item !== undefined
    );
    const firstMessage = arrayOfValidationFunctionMessages[0];
    if (firstMessage) {
        return firstMessage;
    }
    return null;
}

/**
 * clean()
 * The clean function is used to clear all null and undifind values of object properties
 */
export function clean(obj) {
    for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    return obj;
}
