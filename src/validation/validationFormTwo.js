import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isEmailValid, isLengthRange, isRegExValidation } = utilities;

// validation for FormTwo component form
function validation(values) {
    const { email, password, username } = values;
    const fields = {};

    fields.email = validationField(email, [isRequired(), isEmailValid()]);

    fields.password = validationField(password, [
        isRequired('Password is required'),
        isRegExValidation()
    ]);

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(5, 15)
    ]);

    const errors = clean(fields);
    return errors;
}

export default validation;
