## React UI library POC with CSS Modules

This project was bootstrapped with [create-react-app-css-modules](https://www.npmjs.com/package/react-scripts-cssmodules).

- It is a POC UI library. Not production ready.
- The components are not fully formed.
- It's essentially a "scaffold" to test CSS Modules + Sass.

## View components

1. Comment out the following sections in "config\webpack.config.dev.js"
```javascript
libraryTarget: 'commonjs2'
```

```javascript
externals: {
    'react': 'commonjs react'
}
```

2. Start server with ```npm start```.

## How to use as a library

The library has been exported with ```npm run build``` and published to NPM.

### 1. Install library in your consuming app
`npm i css-modules-ui-lib-poc`

### 2. Install other Node packages if not already installed
`npm i --save babel-cli babel-preset-es2015 babel-preset-react babel-preset-stage-0 classnames node-sass sass-loader`

### 3. Modify "webpack.config.js"

1. Require 'ExtractTextPlugin' to generate stylesheet
```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin');
```

2. Add this plugin to plugins array
```javascript
plugins: [
    // ... other plugins ...
    new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
    })
],
```

3. Add 'scss' loader after the 'css' loader
```javascript
{
    test: /\.css$/,
    // ... CSS loader ...
},
{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true,
            modules: true,
            importLoaders: 2,
            localIdentName: '[name]___[local]___[hash:base64:5]'
          }
        },
        'sass-loader'
      ]
    })
},
```

4. Add 'scss' to the exclude array
```javascript
exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss/],
```

### 4. Example `<Button/>` usage
```jsx
import React, { Component } from 'react';
import { Button } from 'css-modules-ui-lib-poc';

export default class MyComponent extends Component {
  render() {
    return (
        <div className="App">
            <Button text="button" />

            <Button className="primary" disabled="disabled" text="disabled primary" />

            <Button className="secondary" text="secondary button" />

            <Button className="primary" size="small" text="small primary" />

            <Button className="icon" icon="info" text="with icon" />
        </div>
    );
  }
}
```
