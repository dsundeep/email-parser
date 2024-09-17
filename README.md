# @js-genie/email-parser
A javascript utility package to parse email addresses

# Installation
```shell
npm i --save @js-genie/email-parser
```

### Email Parser

```javascript
const { isValid, getUsername, getDomain } = require('@js-genie/email-parser');

isValidEmail = isValid('testuser1@testmail.com'); // returns true
isValidEmail = isValid('test.user_qwe@testmail.com'); // returns true
isValidEmail = isValid('{key : text@testemail.com}'); // returns false
isValidEmail = isValid('testuser1@testmail.com'); // returns false

username = getUsername("{}teststring"); // returns ''
username = getUsername({key: 'testemail@test.com'}); // returns ''
username = getUsername("testemail@test.com"); // returns 'testemail'

domain = getDomain("{}teststring"); // returns ''
domain = getDomain({key: 'testemail@test.com'}); // returns ''
domain = getDomain("testemail@test.com"); // returns 'test.com'
```

- `isValid()` function is used to check if the input is a valid email address or not.
- `getUsername()` function is used to get the username part of the input email address.
- `getDomain()` function is used to get the domain part of the input email address.
-  If the `typeof` input email address is not string or the input email is not valid, an empty value is returned.
