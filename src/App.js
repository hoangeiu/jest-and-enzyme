import React, { Component } from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
import Input from "./Input";

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App m-3">
        <h1>Jotto</h1>
        <div>The secret word is "party"</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return {
    success,
    secretWord,
    guessedWords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => dispatch(getSecretWord()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
