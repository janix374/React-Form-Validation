import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isLengthRange, isMaxLength } = utilities;

function validation(values) {
    const { username, fileInput } = values;
    const fields = {};

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(3, 20)
    ]);

    fields.fileInput = validationField(fileInput, [isRequired('Upload file is required')]);

    const errors = clean(fields);
    return errors;
}

export default validation;
