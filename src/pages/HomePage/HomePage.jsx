import React from 'react';

import { FlatButton } from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
require('./HomePage.scss');

export default class Home extends React.Component {
    
    render() {    
        return (
            <div>
                <Card>
                    <CardHeader title="URL Avatar" subtitle="Subtitle"
                        avatar="https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg" />
                    <CardMedia overlay={<CardTitle title="Overlay title" 
                        subtitle="Overlay subtitle" />} >
                        <img src="https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>          
            </div>
        );
    }
}