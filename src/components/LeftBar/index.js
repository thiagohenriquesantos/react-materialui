import { Toolbar, Drawer, Hidden } from '@material-ui/core';
import { Category } from './Category';
import { SignIn } from './SignIn';
import { Menu } from './Menu';

export function LeftBar({classes}) {
   return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Menu classes={classes}/>
          <SignIn/>
          <Category key={classes.id} classes={classes}/>
          
        </div>
      </Drawer>
    </Hidden>
   ) 
}