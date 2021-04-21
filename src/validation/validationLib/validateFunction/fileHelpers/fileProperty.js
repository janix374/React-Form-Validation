export default (fileProp, obj) => {
    const arrayPropertire = [];
    for (const prop in obj) {
        arrayPropertire.push(prop);
    }
    const found = arrayPropertire.find((element) => element === 'size');
    if (found === fileProp) {
        return true;
    }
    return false;
};
