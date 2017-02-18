# po-brunch

Adds Portable Object support to [brunch](http://brunch.io).

With this plugin you will be able to import translation `.po` files in Javascript.

It basically converts `.po` files into javascript objects which can be used in
libraries like [Jed](http://messageformat.github.io/Jed/).

## Installation

Install the plugin via npm with `npm install --save-dev po-brunch`.

## Configuration

This plugin relies on library [po2json](https://github.com/mikeedwards/po2json).
The configuration you can use in `portableObject` brunch plugin key is the same
you can use with po2json parse methods.

```js
modules.exports = {
  // ...
  plugins: {
    portableObject: {
      format: 'raw'
    }
  }
};
```
