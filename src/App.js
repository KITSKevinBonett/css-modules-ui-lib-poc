import React, { Component } from 'react';

import Button from './lib/components/Button/Button.js';
import Link from './lib/components/Link/Link.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link label="link" />
                <br/><br/>

                <Link className="primary" label="primary link" />
                <br/><br/>

                <Button label="button" />
                <br/><br/>

                <Button disabled="disabled" label="disabled button" />
                <br/><br/>

                <Button className="primary" label="primary button" />
                <br/><br/>

                <Button className="primary" disabled="disabled" label="disabled primary" />
                <br/><br/>

                <Button className="secondary" label="secondary button" />
                <br/><br/>

                <Button className="primary" size="large" label="large primary" />
                <br/><br/>

                <Button className="primary" size="small" label="small primary" />
                <br/><br/>

                <Button className="icon" icon="info" label="with icon" />
                <br/><br/>
            </div>
        );
    }
}

export default App;
