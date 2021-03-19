import React, { Component } from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
import Input from "./Input";

class App extends Component {
  render() {
    return (
      <div className="App m-3">
        <h1>Jotto</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
