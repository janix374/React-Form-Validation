export default (fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = 'At least one check box must be checked';
    const arrayOfObjectValues = Object.values(value);
    if (!arrayOfObjectValues.includes(true)) {
        return `${fieldMessage}`;
    }
};
