import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

const NavBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
          <Button className={classes.navButton} color='inherit' href='/'>
            Home
          </Button>
          <Button
            className={classes.navButton}
            color='inherit'
            href='/dashboard'
          >
            Dashboard
          </Button>
          <Button className={classes.navButton} color='inherit' href='/login'>
            Login
          </Button>
          <Button className={classes.navButton} color='inherit' href='/signup'>
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
