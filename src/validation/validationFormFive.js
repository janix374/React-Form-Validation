import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isLengthRange, isEmailValid, IsOneButtonChecked } = utilities;

// validation for FormFour component form
function validation(values) {
    const { username, email, buttonCheck } = values;

    const fields = {};

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(5, 15)
    ]);

    fields.email = validationField(email, [isRequired(), isEmailValid()]);

    fields.buttonCheck = validationField(buttonCheck, [IsOneButtonChecked()]);

    const errors = clean(fields);
    return errors;
}

export default validation;
