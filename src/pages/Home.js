import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import LoadingSpinner from '../components/LoadingSpinner';
import BlogPost from '../components/BlogPost';

// MUI
import Grid from '@material-ui/core/Grid';

// Redux
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const {
      classes,
      data: { loading, posts },
    } = this.props;
    let postMarkup = loading ? (
      <LoadingSpinner loading={loading} />
    ) : (
      posts.map((post) => (
        <BlogPost
          key={post.postId}
          id={post.postId}
          title={post.title}
          body={post.body}
          ownerImg={post.ownerImg}
          createdAt={post.createdAt}
        />
      ))
    );

    return (
      <Grid container spacing={3}>
        {postMarkup}
      </Grid>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPosts })(withStyles(styles)(Home));
