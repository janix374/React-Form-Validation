export default (firsField, secondField, fieldMessage = null) => () => {
    if (fieldMessage == null) fieldMessage = 'compare fields are not equal';
    if (firsField !== secondField) {
        return `${fieldMessage}`;
    }
};
