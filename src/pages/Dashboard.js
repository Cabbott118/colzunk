import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

// Components
import LoadingSpinner from '../components/LoadingSpinner';
import UserInfo from '../components/UserInfo';

// MUI
import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';
import { getUserData, logoutUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    console.log(this.props);
    const {
      classes,
      user: { loading, userCredentials },
    } = this.props;

    let userMarkUp = loading ? (
      <LoadingSpinner loading={loading} />
    ) : !userCredentials ? (
      <LoadingSpinner loading={userCredentials} />
    ) : (
      <UserInfo user={userCredentials} />
    );

    return (
      <div>
        {userMarkUp}
        <Button
          className={classes.button}
          variant='contained'
          color='secondary'
          onClick={this.handleLogout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getUserData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  getUserData,
  logoutUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Dashboard));
