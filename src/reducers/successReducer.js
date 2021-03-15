/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */

import { actionTypes } from "../actions";

const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};

export default successReducer;
