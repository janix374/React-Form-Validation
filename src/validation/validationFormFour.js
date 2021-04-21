import { validationField, clean } from './validationLib/validationField';
import utilities from './validationLib/utilities';

const { isRequired, isLengthRange, fileRangeSizeValidation } = utilities;

// // validation for FormFour component form
function validation(values) {
    const { username, fileInput } = values;

    console.log(values);
    const fields = {};

    fields.username = validationField(username, [
        isRequired('User name is required'),
        isLengthRange(3, 20)
    ]);

    fields.fileInput = validationField(fileInput, [
        isRequired('Upload file is required'),
        fileRangeSizeValidation(63000, 80000)
    ]);

    const errors = clean(fields);
    return errors;
}

export default validation;
