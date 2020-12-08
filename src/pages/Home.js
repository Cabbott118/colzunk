import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import LoadingSpinner from '../components/LoadingSpinner';
import BlogCard from '../components/BlogCard';

// MUI
import Container from '@material-ui/core/Container';

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
    console.log(this.props);
    const {
      classes,
      data: { loading, posts },
    } = this.props;
    let postMarkup = loading ? (
      <LoadingSpinner loading={loading} />
    ) : (
      posts.map((post) => (
        <BlogCard
          key={post.postId}
          id={post.postId}
          title={post.title}
          body={post.body}
          createdAt={post.createdAt}
        />
      ))
    );

    return <Container maxWidth='md'>{postMarkup}</Container>;
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
