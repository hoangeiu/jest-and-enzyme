import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";

import Input, { UnconnectedInput } from "./Input";

/**
 * Factory function to create a ShallowWrapper for GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    it("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    it("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    it("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    it("does not renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  it("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });

    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  it("`guessWord` action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  it("call `guessWord` when button is clicked", () => {
    const guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    };

    // set up Input component with guessWordMock as the guessWord prop
    const wrapper = shallow(<UnconnectedInput {...props} />);

    // simulate clicked
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");

    // check to see if mock ran
    const getGuessWordCallCount = guessWordMock.mock.calls.length;

    expect(getGuessWordCallCount).toBe(1);
  });
});
