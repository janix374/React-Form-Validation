export default (regEx, regExMessage) => (value) => {
    if (!regEx.test(value)) {
        return `${regExMessage}`;
    }
};
