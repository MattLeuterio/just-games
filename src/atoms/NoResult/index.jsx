import React from "react";
import PropTypes from "prop-types";
import { NoResultCTN } from "./style";
import Helvetica from "../../ui/typography/helvetica";

const NoResult = ({ text, widthCtn }) => {
  return (
    <NoResultCTN widthCtn={widthCtn}>
      <Helvetica>{text}</Helvetica>
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
