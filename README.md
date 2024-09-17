# parse.js
A common javascript utility package to parse different types

# Installation
```shell
npm i --save parse.js
```

# Features
- Email Parser


### Email Parser

```javascript
const { email } = require('parser.js');

const isValidEmail = email.isValid('testuser1@testmail.com'); // returns true
const isValidEmail = email.isValid('test.user_qwe@testmail.com'); // returns true
const isValidEmail = email.isValid('{key : text@testemail.com}'); // returns false
const isValidEmail = email.isValid('testuser1@testmail.com'); // returns false

const username = email.getUsername("{}teststring"); // returns ''
const username = email.getUsername({key: 'testemail@test.com'}); // returns ''
const username = email.getUsername("testemail@test.com"); // returns 'testemail'

const username = email.getDomain("{}teststring"); // returns ''
const username = email.getDomain({key: 'testemail@test.com'}); // returns ''
const username = email.getDomain("testemail@test.com"); // returns 'test.com'
```

- `isValid()` function is used to check if the input is a valid email address or not.
- `getUsername()` function is used to get the username part of the input email address.
- `getDomain()` function is used to get the domain part of the input email address.
-  If the `typeof` input email address is not string or the input email is not valid, an empty value is returned.