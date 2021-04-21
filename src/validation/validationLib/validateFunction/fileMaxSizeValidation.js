import fileProperty from './fileHelpers/fileProperty';

export default (fileSize, fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = `File size must be smaller then ${fileSize}`;
    const existPropObj = fileProperty('size', value);
    if (!existPropObj) {
        return 'Select the appropriate file!';
    }
    if (value.size > fileSize) {
        return `${fieldMessage}`;
    }
};
