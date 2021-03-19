import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  state = {
    guessedWord: "",
  };

  handleSubmit() {
    this.props.guessWord(this.state.guessedWord);
  }

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
          onClick={() => this.props.guessWord("train")}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

const mapDispatchToProps = (dispatch) => {
  return {
    guessWord: (guessedWord) => dispatch(guessWord(guessedWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
