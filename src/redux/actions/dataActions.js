import {
  // LOADING_DATA,
  // LOADING_UI,
  // STOP_LOADING_UI,
  // SET_ERRORS,
  CLEAR_ERRORS,
} from '../types';
// import axios from 'axios';

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
