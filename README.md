base64-encode-string
====

An ultra-basic module that just converts a string to its base64 equivalent. Designed to demonstrate how to build a JavaScript package for both Node and the browser.

Usage
---

    npm install b64encode

```js
var b64encode = require('base64-encode-string');
b64encode('foo');    // Zm9v
b64encode('foobar'); // Zm9vYmFy
```
