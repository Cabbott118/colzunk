import proxyUrl from '../../util/proxy';
import {
  SET_POSTS,
  SET_POST,
  ADD_POST,
  LOADING_DATA,
  LOADING_UI,
  // STOP_LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
} from '../types';
import axios from 'axios';

export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${proxyUrl}/posts`)
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POSTS,
        payload: [],
      });
    });
};

export const getPost = (id) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${proxyUrl}/posts/${id}`)
    .then((res) => {
      dispatch({
        type: SET_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POST,
        payload: {},
      });
    });
};

export const addPost = (newPost) => (dispatch) => {
  dispatch({
    type: LOADING_UI,
  });
  axios
    .post(`${proxyUrl}/post`, newPost)
    .then((res) => {
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
