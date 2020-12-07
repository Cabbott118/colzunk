import { withStyles } from '@material-ui/core';
import React, { Component, Fragment } from 'react';

// MUI

// Redux
import { connect } from 'react-redux';

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <p>Home</p>
      </div>
    );
  }
}

// Home.propTypes = {
//   data: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, {})(withStyles(styles)(Home));
