import React from 'react';

import { List, ListItem, Divider } from 'material-ui';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

export default class About extends React.Component {
    
    render() {    
        return (
            <div>
                <h1>About</h1>
                <List>
                  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                  <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                  <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                  <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                </List>
                <Divider />
                <List>
                  <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                </List>
            </div>
        );
    }
}