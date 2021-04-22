import fileProperty from './fileHelpers/fileProperty';

export default (allowedExtensions, fieldMessage = null) => (value) => {
    const allowedExtensionsString = allowedExtensions.toString();

    const sorted = [];
    for (let i = 0; i < allowedExtensions.length; i++) {
        sorted.push(allowedExtensions[i].toLowerCase());
    }
    const allowedExtensionsLowerCase = sorted;

    if (fieldMessage == null) fieldMessage = `The file type must be : ${allowedExtensionsString}`;
    const existPropObj = fileProperty('name', value);
    if (!existPropObj) {
        return 'Select the appropriate file!';
    }
    const fileName = value.name;
    const fileExtension = fileName.split('.').pop();
    if (!allowedExtensionsLowerCase.includes(fileExtension)) {
        return `${fieldMessage}`;
    }
};
