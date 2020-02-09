export const checkEmailIsValid = (value) => {
    const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegExp.test(value);
};

export const checkPasswordIsValid = (value) => {
    const MIN_LENGTH_PASSWORD = 4;
    return (value && value.length >= MIN_LENGTH_PASSWORD);
};
