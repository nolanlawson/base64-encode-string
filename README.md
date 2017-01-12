base64-encode-string
====

An ultra-basic module that just converts a string to its base64 equivalent. Designed to demonstrate how to build a JavaScript package for both Node and the browser.

Usage
---

    npm install base64-encode-string

```js
var b64encode = require('base64-encode-string');
b64encode('foo');    // Zm9v
b64encode('foobar'); // Zm9vYmFy
```

Design
----

`src/index.js` contains the "source" JavaScript, which is then built with Rollup using a `prepublish` script. To see the output JS files that get shipped when you `npm install`, [check out unpkg](https://unpkg.com/base64-encode-string/).
