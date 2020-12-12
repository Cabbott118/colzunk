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

class BlogPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const {
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
          imageUrl={post.imageUrl}
          ownerImg={post.ownerImg}
          createdAt={post.createdAt}
        />
      ))
    );

    return (
      <div style={{ margin: '30px' }}>
        <Grid container>{postMarkup}</Grid>
      </div>
    );
  }
}

BlogPage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  posts: state.data.posts,
});

export default connect(mapStateToProps, { getPosts })(
  withStyles(styles)(BlogPage)
);
