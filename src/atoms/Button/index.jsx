import React from "react";
import PropTypes from "prop-types";
import { ButtonCTN } from "./style";

const Button = ({ sizeIcon, icon, onClick, color, text, padding }) => {
  return (
    <ButtonCTN onClick={onClick} color={color} padding={padding}>
      {text}
      {/* {icon && <Icon icon={icon} size={sizeIcon} />} */}
    </ButtonCTN>
  );
};

Button.defaultProps = {
  color: "#fff",
  text: "Text",
  sizeIcon: 16,
  padding: "15px 120px",
};

Button.propTypes = {
  icon: PropTypes.string,
  sizeIcon: PropTypes.number,
  onClick: PropTypes.func,
  rotate: PropTypes.number,
  padding: PropTypes.string,
};

export default Button;
