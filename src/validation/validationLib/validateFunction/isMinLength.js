export default (minCharacter, fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = `must be at least ${minCharacter} characters`;
    if (value.length < minCharacter) {
        return `${fieldMessage}`;
    }
};
