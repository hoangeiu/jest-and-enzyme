import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App from "./App";

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state);
  return shallow(<App store={store} />)
    .dive()
    .dive();
};

describe("redux properties", () => {
  it("has access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });

    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  it("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });

    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });

  it("has access to `guessWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });

    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toBe(guessedWords);
  });

  it("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
