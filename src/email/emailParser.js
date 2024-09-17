const getDomain = (inputEmail) => {
    let domain = "";
    if (typeof inputEmail !== 'string') return domain; // return empty domain if inputEmail is not string

    const emailBody = inputEmail.split("@");
    domain = emailBody[1];

    return domain;
}

const getUsername = (inputEmail) => {
    let username = "";
    if (typeof inputEmail !== 'string') return username; // return empty username if inputEmail is not string

    const emailBody = inputEmail.split("@");
    username = emailBody[0];

    return username;
}

module.exports = {
    getUsername,
    getDomain
};