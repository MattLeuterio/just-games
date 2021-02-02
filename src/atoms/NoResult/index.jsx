import React from "react";
import PropTypes from "prop-types";
import { NoResultCTN } from "./style";
import Roboto from "../../ui/typography/roboto";

const NoResult = ({ text, widthCtn }) => {
  return (
    <NoResultCTN widthCtn={widthCtn}>
      <Roboto>{text}</Roboto>
    </NoResultCTN>
  );
};

NoResult.defaultProps = {
  text: "No Result",
  widthCtn: "100%",
};

NoResult.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoResult;
