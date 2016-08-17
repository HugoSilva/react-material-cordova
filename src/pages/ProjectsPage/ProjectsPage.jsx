import React from 'react';
import Data from '../../data';

import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
require('./ProjectsPage.scss');

export default class Projects extends React.Component {

  render() {
    const data = Data.init();
    const projects = data.projects.map((item, index) => {
      return (
        <Card key={'proj_'+index}>
          <CardMedia overlay={<CardTitle title={item.name}
            subtitle="Overlay subtitle" />} >
            <img src="https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg" />
          </CardMedia>
          <CardText>
            {item.description}
          </CardText>
        </Card>
      )
    });

    return (
      <div>
        {projects}
      </div>
    );
  }
}
