import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MuiLink from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <MuiLink component={Link} to={'/'} color='primary' variant='h6'>
            Home
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={Link} to={'/blog'} color='primary' variant='h6'>
            Blog
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={Link} to={'#'} color='primary' variant='h6'>
            Isagenix
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={Link} to={'#'} color='primary' variant='h6'>
            Oils
          </MuiLink>
        </ListItem>
        <Divider />
        <Grid
          container
          style={{ marginTop: '30px' }}
          direction='row'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <MuiLink component={Link} to={'#'}>
              <FacebookIcon color='primary' fontSize='large' />
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink component={Link} to={'#'}>
              <TwitterIcon color='primary' fontSize='large' />
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink component={Link} to={'#'}>
              <InstagramIcon color='primary' fontSize='large' />
            </MuiLink>
          </Grid>
        </Grid>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
