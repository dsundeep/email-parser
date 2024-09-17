function isValid(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

const getDomain = (inputEmail) => {
    let domain = "";
    
    // return empty domain if inputEmail is not string
    if (typeof inputEmail !== 'string') return domain;

    // return empty domain if inputEmail is not valid
    if (!isValid(inputEmail)) return domain;

    const emailBody = inputEmail.split("@");
    domain = emailBody[1];

    return domain;
}

const getUsername = (inputEmail) => {
    let username = "";
    
    // return empty username if inputEmail is not string
    if (typeof inputEmail !== 'string') return username;

    // return empty username if inputEmail is not valid
    if (!isValid(inputEmail)) return username;

    const emailBody = inputEmail.split("@");
    username = emailBody[0];

    return username;
}

module.exports = {
    getUsername,
    getDomain,
    isValid
};