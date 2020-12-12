import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import Footer from '../components/Footer';

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
      <Fragment>
        <Grid
          className={classes.home}
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h1' color='secondary'>
              Home
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Fragment>
    );
  }
}

// Home.propTypes = {

// };

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(Home));
