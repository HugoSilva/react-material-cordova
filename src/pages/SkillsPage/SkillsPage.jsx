import React from 'react';

import { List, ListItem, Divider } from 'material-ui';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
require('./SkillsPage.scss');

export default class Skills extends React.Component {

    render() {
        return (
            <div>
                <List>
                  <ListItem primaryText="Web Development" leftIcon={<ContentInbox />} />
                  <Divider />
                  <ListItem primaryText="UI / UX" leftIcon={<ActionGrade />} />
                  <Divider />
                  <ListItem primaryText="Mobile Development" leftIcon={<ContentSend />} />
                  <Divider />
                  <ListItem primaryText="Database Management" leftIcon={<ContentDrafts />} />
                  <Divider />
                  <ListItem primaryText="Version Control" leftIcon={<ContentInbox />} />
                  <Divider />
                  <ListItem primaryText="Soft Skills" rightIcon={<ActionInfo />} />
                </List>
            </div>
        );
    }
}
