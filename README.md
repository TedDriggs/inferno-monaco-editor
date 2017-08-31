# inferno-monaco-editor

[Monaco Editor](https://github.com/Microsoft/monaco-editor) for Inferno.

## Examples
To build the example locally, run:

```
npm install
npm run watch
```

Then open http://localhost:8080 in a browser.

## Usage with Webpack

Add the following plugin to your Webpack config's `plugins` section:

```javascript
new CopyWebpackPlugin([
    {
        from: 'node_modules/monaco-editor/min/vs',
        to: 'vs',
    }
])
```

## Credits

This library builds on the work of [Leon Shi's](https://github.com/superRaytin)
excellent [`react-monaco-editor`](https://github.com/superRaytin/react-monaco-editor).