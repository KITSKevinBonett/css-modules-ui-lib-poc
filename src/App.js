import React, { Component } from 'react';
import './App.css';

import Button from './node_modules/components/Button/Button.js';
import Link from './node_modules/components/Link/Link.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link className="link" text="link" />
                <br/><br/>

                <Link className="primary" text="primary link" />
                <br/><br/>

                <Button className="button" text="button" />
                <br/><br/>

                <Button className="button" disabled="disabled" text="disabled button" />
                <br/><br/>

                <Button className="primary" text="primary button" />
                <br/><br/>

                <Button className="primary" disabled="disabled" text="disabled primary" />
                <br/><br/>

                <Button className="secondary" text="secondary button" />
                <br/><br/>

                <Button className="large" text="large button" />
                <br/><br/>

                <Button className="small" text="small button" />
                <br/><br/>

                <Button className="icon" icon="info" text="with icon" />
                <br/><br/>
            </div>
        );
    }
}

export default App;
