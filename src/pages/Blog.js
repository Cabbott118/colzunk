import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

// Components
import LoadingSpinner from '../components/LoadingSpinner';

// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

// Redux
import { connect } from 'react-redux';
import { getPost } from '../redux/actions/dataActions';

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class Blog extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  handleBreadcrumbs = (e) => {
    console.log('Navigate somewhere');
  };

  render() {
    console.log(this.props);
    const {
      classes,
      data: {
        loading,
        post: { title, body, imageUrl },
      },
    } = this.props;
    console.log(this.props);

    const postMarkup = (
      <div>
        <Breadcrumbs
          aria-label='breadcrumb'
          style={{ paddingBottom: '10px', paddingLeft: '8px' }}
        >
          <Link color='inherit' href='/' onClick={this.handleBreadcrumbs}>
            Home
          </Link>
          <Link color='inherit' href='/blog' onClick={this.handleBreadcrumbs}>
            Posts
          </Link>
          <Typography color='textPrimary'>{title}</Typography>
        </Breadcrumbs>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <img className={classes.blogPostImg} src={imageUrl} alt='Blog' />
          </Grid>
          <Grid item>
            <Grid
              style={{ padding: '8px' }}
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item>
                <Typography
                  style={{ textDecoration: 'underline' }}
                  variant='h5'
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item style={{ paddingTop: '10px' }}>
                <Typography variant='body1'>{body}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );

    return (
      <Paper style={{ minHeight: '80vh' }}>
        <Container maxWidth='md' style={{ padding: '30px 0' }}>
          {loading ? <LoadingSpinner loading={loading} /> : postMarkup}
        </Container>
      </Paper>
    );
  }
}

Blog.propTypes = {
  getPost: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

const mapActionsToProps = {
  getPost,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Blog));
