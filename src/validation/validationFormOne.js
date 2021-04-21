import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isEmailValid, isMinLength, isLengthRange, isEqual } = utilities;

// validation for FormOne component form
function validation(values) {
    const { email, password, username, confirmpassword } = values;
    const fields = {};

    fields.email = validationField(email, [isRequired(), isEmailValid()]);

    fields.password = validationField(password, [
        isRequired('Password is required'),
        isMinLength(6)
    ]);

    fields.confirmpassword = validationField(confirmpassword, [
        isRequired(),
        isEqual(password, confirmpassword, 'Password and confirm password are not equal!')
    ]);

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(3, 20)
    ]);

    const errors = clean(fields);
    return errors;
}

export default validation;
