import React from 'react';
import * as Data from '../../data';
import { AppBar, Drawer, MenuItem, Divider } from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionHome from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';
import VisibilityOffIcon from 'material-ui/svg-icons/action/visibility-off';
require('./App.scss');

export default class App extends React.Component {
    static propTypes = {
        history: React.PropTypes.object.isRequired,
        children: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {open: false};    
    }
    
    handleToggle() {
        this.setState({open: !this.state.open});
    }
    
    handleClose() {
        this.setState({open: false});
    }
    
    changePage(path) {
        this.props.history.push(path);
        this.setState({open: false});
    }
    
    render() {    
        const data = Data.init();
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title={data.name}
                        onLeftIconButtonTouchTap={() => this.handleToggle()} 
                        onTitleTouchTap={() => this.handleToggle()}/>
                        
                    <Drawer docked={false} width={230} open={this.state.open}
                        onRequestChange={(open) => this.setState({open})} >
                        <MenuItem primaryText="Home" leftIcon={<ActionHome />} 
                            onTouchTap={() => this.changePage('/')} />
                        <MenuItem primaryText="About" leftIcon={<FaceIcon />} 
                            onTouchTap={() => this.changePage('/about')} />
                        <Divider />
                        <MenuItem primaryText="Invalid" leftIcon={<VisibilityOffIcon />} 
                            onTouchTap={() => this.changePage('/invalid')} />
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}