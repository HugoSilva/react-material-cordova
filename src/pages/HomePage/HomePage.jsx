import React from 'react';

import { RaisedButton } from 'material-ui';
require('./HomePage.scss');

export default class Home extends React.Component {
    
    render() {    
        return (
            <div>
                <h1>Home</h1>
                <RaisedButton label="Default" />
                <RaisedButton label="Primary" primary={true} />
                <RaisedButton label="Secondary" secondary={true} />
                <RaisedButton label="Disabled" disabled={true} />
            </div>
        );
    }
}