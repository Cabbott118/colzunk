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

// Util
import { app } from '../util/base';
const db = app.firestore();

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class AddPostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      oldFileName: '',
      imageUrl: '',
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
      imageUrl: this.state.imageUrl,
    };
    this.props.addPost(newPostData);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleImageChange = async (e) => {
    let file = e.target.files[0];
    this.setState({
      oldFileName: file.name,
    });

    const imageExtension = file.name.split('.')[
      file.name.split('.').length - 1
    ];
    let imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(imageFileName);
    await fileRef.put(file);
    this.setState({
      imageUrl: await fileRef.getDownloadURL(),
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
            <input
              type='file'
              id='imageInput'
              onChange={this.handleImageChange}
            />
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
