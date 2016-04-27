import React from 'react';
import Data from '../../data';
import { AppBar, Drawer, Menu, MenuItem, Divider } from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionHome from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';
import VisibilityOffIcon from 'material-ui/svg-icons/action/visibility-off';
require('./App.scss');

export default class App extends React.Component {
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
    }
    
    render() {    
        const data = Data.init();
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title={data.name}
                        onLeftIconButtonTouchTap={() => this.handleToggle()} 
                        onTitleTouchTap={() => this.handleToggle()}/>
                        
                    <Drawer docked={false} width={200} open={this.state.open}
                        onRequestChange={open => this.setState({open})} >
                        <Menu onItemTouchTap={() => this.handleClose()} >
                            <MenuItem primaryText="Home" leftIcon={<ActionHome />} 
                                onTouchTap={() => this.changePage('/')} />
                            <MenuItem primaryText="About" leftIcon={<FaceIcon />} 
                                onTouchTap={() => this.changePage('/about')} />
                            <Divider />
                            <MenuItem primaryText="Invalid" leftIcon={<VisibilityOffIcon />} 
                                onTouchTap={() => this.changePage('/invalid')} />
                        </Menu>
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}