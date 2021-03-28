
/**
 * validationField(field, [array])
 * 
 * field a parameter that comes through validation(values)
 * 
 * [array] arrays of rules for validation view in utilities files
 */
  
const validationField = (field, arrayOfValidationFunction) => {
    const arrayOfValidationFunctionInvok = arrayOfValidationFunction.map(fn => (fn(field)));
    const arrayOfValidationFunctionMessages = arrayOfValidationFunctionInvok.filter(item => item !== undefined);
    // return arrayOfMessages;
    const firstMessage = arrayOfValidationFunctionMessages[0];
    return firstMessage;
}

  export default validationField;