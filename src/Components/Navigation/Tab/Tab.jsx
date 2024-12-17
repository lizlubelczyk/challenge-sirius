import PropTypes from "prop-types";
import "./Tab.scss";

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Tab.defaultProps = {
    active: false,
    onClick: () => {}
};

export default function Tab({ title, active, onClick }) {
    return (
        <div
            className={`tab-item ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="tab-title">{title}</div>
            {active && <div className="tab-underline"></div>}
        </div>
    );
}