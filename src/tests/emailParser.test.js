const { getUsername, getDomain, isValid } = require('../email');

describe('Tests for Email Parser', () => {

    test('Should return false if the input is not a valid email - Test 1', () => {
        const inputEmail = '';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(false);
    });

    test('Should return false if the input is not a valid email - Test 2', () => {
        const inputEmail = '{askd@gmail.com}';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(false);
    });

    test('Should return false if the input is not a valid email - Test 3', () => {
        const inputEmail = '[]';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(false);
    });

    test('Should return false if the input is not a valid email - Test 4', () => {
        const inputEmail = '{key : text@testemail.com}';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(false);
    });

    test('Should return true if the input is a valid email - Test 1', () => {
        const inputEmail = 'testuser1@testmail.com';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(true);
    });

    test('Should return true if the input is a valid email - Test 2', () => {
        const inputEmail = 'test.user+1@testmail.com';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(true);
    });

    test('Should return true if the input is a valid email - Test 3', () => {
        const inputEmail = 'testuser1@testmail.co.in';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(true);
    });

    test('Should return true if the input is a valid email - Test 4', () => {
        const inputEmail = 'test.user_qwe@testmail.com';
        const isValidEmail = isValid(inputEmail);

        expect(isValidEmail).toEqual(true);
    });

    test('getUsername should return empty string if input is not string', () => {
        const inputEmail = {};
        const username = getUsername(inputEmail);

        expect(username).toEqual('');
    });

    test('getUsername should return empty string if input is not valid email', () => {
        const inputEmail = "{}teststring";
        const username = getUsername(inputEmail);

        expect(username).toEqual('');
    });

    test('getUsername should return the username part of the input email address', () => {
        const inputEmail = 'test.email@testmail.com';
        const username = getUsername(inputEmail);

        expect(username).toEqual('test.email');
    });

    test('getDomain should return empty string if input is not string', () => {
        const inputEmail = {};
        const domain = getDomain(inputEmail);

        expect(domain).toEqual('');
    });

    test('getDomain should return empty string if input is not valid email', () => {
        const inputEmail = "teststring@";
        const username = getDomain(inputEmail);

        expect(username).toEqual('');
    });

    test('getDomain should return the domain part of the input email address', () => {
        const inputEmail = 'test.email@testmail.com';
        const username = getDomain(inputEmail);

        expect(username).toEqual('testmail.com');
    });
})