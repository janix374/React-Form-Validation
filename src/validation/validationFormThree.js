import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isLengthRange, isMaxLength } = utilities;

// validation for FormThree component form
function validation(values) {
    const { username, usertext } = values;
    const fields = {};

    fields.usertext = validationField(usertext, [isMaxLength(250)]);

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(3, 20)
    ]);

    const errors = clean(fields);
    return errors;
}

export default validation;
