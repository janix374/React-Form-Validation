export default (fileProp, obj) => {
    const arrayPropertire = [];
    for (const prop in obj) {
        arrayPropertire.push(prop);
    }
    if (arrayPropertire.find((element) => element === fileProp)) {
        return true;
    }
    return false;
};
