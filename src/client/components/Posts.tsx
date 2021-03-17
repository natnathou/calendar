import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '..';

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

const loadData = async (dispatch: any) => {
  console.log('ds loasddata');
  console.log(dispatch);
  await dispatch(fetchUserById());
};

export default {
  component: connect(mapStateToProps, {
    fetchUserById,
  })(Post),
  loadData,
};
