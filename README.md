# @js-genie/email-parser
A javascript utility package to parse email addresses

# Installation
```shell
npm i --save @js-genie/email-parser
```

# Email Parser

- `isValid()` function is used to check if the input is a valid email address or not.
```javascript
const { isValid } = require('@js-genie/email-parser');

isValid('testuser1@testmail.com'); // returns true
isValid('test.user_qwe@testmail.com'); // returns true
isValid('{key : text@testemail.com}'); // returns false
isValid('testuser1@testmail.com'); // returns false
```

- `getUsername()` function is used to get the username part of the input email address.
```javascript
const { getUsername } = require('@js-genie/email-parser');

getUsername("{}teststring"); // returns ''
getUsername({key: 'testemail@test.com'}); // returns ''
getUsername("testemail@test.com"); // returns 'testemail'
```

- `getDomain()` function is used to get the domain part of the input email address.
```javascript
const { getDomain } = require('@js-genie/email-parser');

getDomain("{}teststring"); // returns ''
getDomain({key: 'testemail@test.com'}); // returns ''
getDomain("testemail@test.com"); // returns 'test.com'
```

**Note:** If the `typeof` input email address is not string or the input email is not valid, an empty value is returned.
