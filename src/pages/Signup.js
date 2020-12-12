import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.signupUser(newUserData, this.props.history);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <div style={{ margin: '30px' }}>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <Typography variant='h3' className={classes.pageTitle}>
              Sign Up
            </Typography>
            <form
              className={classes.accountForm}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                id='firstName'
                name='firstName'
                type='text'
                label='First Name'
                className={classes.textField}
                helperText={errors.firstName}
                error={errors.firstName ? true : false}
                value={this.state.firstName}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='lastName'
                name='lastName'
                type='text'
                label='Last Name'
                className={classes.textField}
                helperText={errors.lastName}
                error={errors.lastName ? true : false}
                value={this.state.lastName}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='phoneNumber'
                name='phoneNumber'
                type='text'
                label='Phone Number'
                className={classes.textField}
                helperText={errors.phoneNumber}
                error={errors.phoneNumber ? true : false}
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='email'
                name='email'
                type='email'
                label='Email'
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='password'
                name='password'
                type='password'
                label='Password'
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                label='Confirm Password'
                className={classes.textField}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant='body2' className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}
                disabled={loading}
              >
                Sign Up
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                Already have an account? Login <Link to='/login'>here!</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  signupUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Signup));
