import proxyUrl from '../../util/proxy';
import {
  SET_POSTS,
  LOADING_DATA,
  // LOADING_UI,
  // STOP_LOADING_UI,
  // SET_ERRORS,
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

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
