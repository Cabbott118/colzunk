import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/dataActions';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class AddPostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
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
    const newPostData = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.addPost(newPostData);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Grid item>
        <Paper variant='outlined' className={classes.paper}>
          <Typography variant='h5' className={classes.pageTitle}>
            Add Post
          </Typography>
          <form
            className={classes.accountForm}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              id='title'
              name='title'
              type='title'
              label='Post Title'
              variant='outlined'
              className={classes.textField}
              helperText={errors.title}
              error={errors.title ? true : false}
              value={this.state.title}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='body'
              name='body'
              type='body'
              label='Post Body'
              variant='outlined'
              multiline
              rows={4}
              className={classes.textField}
              helperText={errors.body}
              error={errors.body ? true : false}
              value={this.state.body}
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
              fullWidth
              className={classes.button}
              disabled={loading}
            >
              Add Post
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

AddPostForm.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

const mapActionsToProps = {
  addPost,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(AddPostForm));
