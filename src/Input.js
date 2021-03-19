import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { actionTypes, guessWord } from "./actions";

class Input extends Component {
  render() {
    const { success } = this.props;
    const contents = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

Input.propTypes = {};

const mapStateToProps = ({ success }) => {
  return { success };
};

const mapDispatchToProps = (dispatch) => {
  return {
    guessWord: (guessedWord) => dispatch(guessWord(guessedWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
