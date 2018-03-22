## React UI library POC with CSS Modules

This project was bootstrapped with [create-react-app-css-modules](https://www.npmjs.com/package/react-scripts-cssmodules).

- It is a POC UI library. Not production ready.
- The components are not fully formed.
- It's essentially a "scaffold" to test CSS Modules + Sass.

## View UI library components in browser

You have 2 choices:

### 1. View in "dev" environment (e.g. to test components)

- Comment out the following sections in "config\webpack.config.dev.js"
```javascript
libraryTarget: 'umd'
library: 'uiLibPOC'
```
```javascript
externals: {
    'react': 'commonjs react'
}
```

- Start server ```npm start```.
- Any component changes (e.g. CSS) trigger a re-compilation. Reload browser to see changes.
- You can also view compiled CSS at http://localhost:3000/static/css/main.css

### 2. Or build the app and browse with static server

- Comment out the same sections as above in "config\webpack.config.prod.js"
- ```npm run build```.
- Run static server ```serve -s build```.
- View app at http://localhost:5000

## How does this all work as an installable library / NPM package?

The library has been published to NPM.

### "package.json" configuration

- Library has been exported with ```npm run lib```.
- Package name has been defined - e.g. ```"name": "css-modules-ui-lib-poc"```.
- Library entry point has been defined - e.g. ```"main": "lib/index.js"```.

### Component configuration

- Each component in "src\lib\components" has an associated ".js", ".scss" and ".json" file.
- Each component is exported as a module in "src\lib\index.js" - e.g. ```export { default as Button } from './components/Button';```.

## So how do I use this library from another React application?

### 1. Install library in your consuming app
`npm i css-modules-ui-lib-poc`

### 2. Install other Node packages if not already installed
`npm i --save babel-cli babel-preset-es2015 babel-preset-react babel-preset-stage-0 classnames node-sass sass-loader`

### 3. Modify "webpack.config.js" (or "dev"/"prod" variants if using Create React App)

1. Require 'ExtractTextPlugin' to generate stylesheet
```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin');
```

2. Add this plugin to plugins array
```javascript
plugins: [
  // ... other plugins ...
  new ExtractTextPlugin({
    filename: 'static/css/[name].css', // Or whatever filepath/name you use in your app
    allChunks: true
  })
],
```

3. Replaced default CSS Modules loader config with...
```javascript
{
  test: /\.s|css$/,
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
      {
        loader: 'postcss-loader',
          options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        }
      },
      'sass-loader'
    ]
  })
},
```

4. Add 'scss' to the exclude array
```javascript
exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/],
```

### 4. Example `<Button/>` usage
```jsx
import React, { Component } from 'react';
import { Button } from 'css-modules-ui-lib-poc';

export default class MyComponent extends Component {
  render() {
    return (
      <div className="App">
        <Button label="button" />

        <Button className="primary" disabled="disabled" label="disabled primary" />

        <Button className="secondary" label="secondary button" />

        <Button className="primary" size="small" label="small primary" />

        <Button className="icon" icon="info" label="with icon" />
      </div>
    );
  }
}
```
