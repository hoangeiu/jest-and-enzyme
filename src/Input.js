import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Input = (props) => {
  const { success } = props;

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
};

Input.propTypes = {};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
