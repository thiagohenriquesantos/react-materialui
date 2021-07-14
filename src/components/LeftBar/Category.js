import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';

const categories = ["Música", "Esportes", "Jogos", "Filmes", "Notícias", "Ao vivo", "Destaques", "Videos 360"]

export function Category({ classes }) {
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          id='nested-list-subheader'
          className={classes.subheader}
        >
          O Melhor do youtube
        </ListSubheader>
      }
    >
      {categories.map(category => (
        <div key={category}>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={category}
            />
          </ListItem>
        </div>
      ))}
      <Divider />
      <ListItem button classes={{ root: classes.listItem }}>
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary={'Procurar mais'}
        />
      </ListItem>
      <Divider />
    </List>
  )
}