export default (fieldMessage = null) => (value) => {
    if (fieldMessage == null) fieldMessage = 'Email adress is invalid';
    if (!/\S+@\S+\.\S+/.test(value)) {
        return `${fieldMessage}`;
    }
};
