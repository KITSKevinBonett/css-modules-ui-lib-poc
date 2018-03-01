import React, { Component } from 'react';

import Button from './node_modules/components/Button/Button.js';
import Link from './node_modules/components/Link/Link.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link text="link" />
                <br/><br/>

                <Link className="primary" text="primary link" />
                <br/><br/>

                <Button text="button" />
                <br/><br/>

                <Button disabled="disabled" text="disabled button" />
                <br/><br/>

                <Button className="primary" text="primary button" />
                <br/><br/>

                <Button className="primary" disabled="disabled" text="disabled primary" />
                <br/><br/>

                <Button className="secondary" text="secondary button" />
                <br/><br/>

                <Button className="primary" size="large" text="large primary" />
                <br/><br/>

                <Button className="primary" size="small" text="small primary" />
                <br/><br/>

                <Button className="icon" icon="info" text="with icon" />
                <br/><br/>
            </div>
        );
    }
}

export default App;
