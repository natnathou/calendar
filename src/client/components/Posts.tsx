import { AsyncThunk } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '..';

import { PostState, fetchUserById, Post } from '../reducers/apiSlice';

interface PostProps {
  api: PostState;
  fetchUserById: any;
}

const Post = (props: PostProps) => {
  useEffect(() => {
    props.fetchUserById();
  }, []);

  const postRendering = () => {
    return props.api.posts.map((post) => {
      return <div key={post.title}>{post.title}</div>;
    });
  };
  return <div>{postRendering()}</div>;
};

const mapStateToProps = ({ api }: RootState) => {
  return { api };
};

export default connect(mapStateToProps, {
  fetchUserById,
})(Post);
