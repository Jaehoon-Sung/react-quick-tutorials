import PropTypes from "prop-types";

function Button({ buttonText }) {
  return <button>{buttonText}</button>;
}

Button.prototype = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
