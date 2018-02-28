This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and includes CSS Modules.

It's a POC UI library.

To use:

1. `npm i css-modules-ui-lib-poc`
2. In your consuming React app, `import { Button, Link } from 'css-modules-ui-lib-poc';`
3. Example `<Button/>` usage:
```
<Button text="button" />
<Button disabled="disabled" text="disabled button" />
<Button className="primary" text="primary button" />
<Button className="secondary" text="secondary button" />
<Button className="primary" size="large" text="large primary" />
<Button className="icon" icon="info" text="with icon" />
```
