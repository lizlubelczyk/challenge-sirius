import PropTypes from "prop-types";
import "./LargeNavItem.scss"

LargeNavItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default function LargeNavItem({ icon, title, active }) {
    return (
        <div className={`large-nav-item ${active ? 'active' : ''}`}>
            {icon}
            <div className="name">{title}</div>
        </div>
    )
}