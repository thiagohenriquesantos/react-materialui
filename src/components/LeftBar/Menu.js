import { List,  Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

export function Menu({classes}) {
  return (
    <>
      <List>
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Início'}
          />
        </ListItem>
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<Whatshot />}</ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Em alta'}
          />
        </ListItem>
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<Subscriptions />}</ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Inscrições'}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>
            <VideoLibrary />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Biblioteca'}
          />
        </ListItem>
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Histórico'}
          />
        </ListItem>
      </List>
    </>
  )
}