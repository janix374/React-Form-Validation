import fileProperty from './fileHelpers/fileProperty';

export default (minFileSize, maxFileSize, fieldMessage = null) => (value) => {
    if (fieldMessage == null)
        fieldMessage = `File size must be smaller then ${maxFileSize} and greater ${minFileSize}`;
    const existPropObj = fileProperty('size', value);
    if (!existPropObj) {
        return 'Select the appropriate file!';
    }
    if (value.size < minFileSize || value.size > maxFileSize) {
        return `${fieldMessage}`;
    }
};
