import PropTypes from "prop-types";
import "./Tab.scss";

export default function Tab({ title, active, onClick, darkMode }) {
    return (
        <div
            className={`tab-item ${active ? "active" : ""} ${
                darkMode ? "dark-mode" : ""
            }`}
            onClick={onClick}
        >
            <div className="tab-title">{title}</div>
            {active && <div className="tab-underline"></div>}
        </div>
    );
}

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Tab.defaultProps = {
    active: false,
    onClick: () => {}
};
