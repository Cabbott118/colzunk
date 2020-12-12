import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';

// Components
import NavDrawer from './NavDrawer';

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            ColZunk
          </Typography>
          <Hidden smDown>
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
            <Button
              className={classes.navButton}
              color='inherit'
              href='/signup'
            >
              Signup
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <NavDrawer />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// export default withStyles(styles)(NavBar);

NavBar.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(NavBar);
