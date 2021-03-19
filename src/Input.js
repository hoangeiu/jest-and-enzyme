import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const guessedWord = this.inputBox.current.value;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const { success } = this.props;
    const contents = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          ref={this.inputBox}
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.handleSubmit}
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
