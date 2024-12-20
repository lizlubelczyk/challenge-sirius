import PropTypes from "prop-types";
import "./LargeNavItem.scss"

export default function LargeNavItem({ icon, title, active, darkMode }) {
    return (
        <div className={`large-nav-item ${active ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>
            <div className="icon">
                {icon}
            </div>
            <div className="name">{title}</div>
        </div>
    )
}

LargeNavItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool
}