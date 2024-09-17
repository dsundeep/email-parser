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
```
- `isValid()` function is used to check if the input is a valid email address or not.
- `getUsername()` function is used to get the username part of the input email address.
- `getDomain()` function is used to get the domain part of the input email address.
-  If the `typeof` input email address is not string or the input email is not valid, an empty value is returned.