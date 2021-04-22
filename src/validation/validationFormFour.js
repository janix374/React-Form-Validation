import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const {
    isRequired,
    isLengthRange,
    fileRangeSizeValidation,
    fileTypeValidation,
    isEmailValid
} = utilities;

// validation for FormFour component form
function validation(values) {
    const { username, userEmail, fileInput } = values;

    const fields = {};

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(3, 20)
    ]);

    fields.userEmail = validationField(userEmail, [isRequired(), isEmailValid()]);

    fields.fileInput = validationField(fileInput, [
        isRequired('Upload file is required'),
        fileRangeSizeValidation(5000, 200000),
        fileTypeValidation(['jpg', 'jpeg', 'png'])
    ]);

    const errors = clean(fields);
    return errors;
}

export default validation;
