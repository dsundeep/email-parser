const { getUsername, getDomain } = require('../email');

describe('Tests for Email Parser', () => {

    test('getUsername should return empty string if input is not string', () => {
        const inputEmail = {};
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

    test('getDomain should return the domain part of the input email address', () => {
        const inputEmail = 'test.email@testmail.com';
        const username = getDomain(inputEmail);

        expect(username).toEqual('testmail.com');
    });
})