import PropTypes from "prop-types";
import "./Button.scss";

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    mode: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    mode: "default",
}

export default function Button({ text, mode, onClick, size }) {
    return (
        <button className={`button ${size} ${mode}`}>{text}</button>
    )
}