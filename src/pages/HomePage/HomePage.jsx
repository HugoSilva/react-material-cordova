import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';

export default class Home extends React.Component {
    
    render() {    
        return (
            <div>
                <h1>Home</h1>
                <FlatButton label="Default" />
                <FlatButton label="Primary" primary={true} />
                <FlatButton label="Secondary" secondary={true} />
                <FlatButton label="Disabled" disabled={true} />
            </div>
        );
    }
}