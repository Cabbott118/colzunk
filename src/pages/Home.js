import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Redux
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <Typography variant='h1' color='secondary'>
          Home
        </Typography>
      </div>
    );
  }
}

// Home.propTypes = {

// };

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(Home));
