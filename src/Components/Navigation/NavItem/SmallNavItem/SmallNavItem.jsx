import PropTypes from "prop-types";
import "./SmallNavItem.scss"

SmallNavItem.propTypes = {
    icon: PropTypes.element.isRequired,
    active: PropTypes.bool
}

export default function SmallNavItem({ icon, active }) {
    return (
        <div className={`small-nav-item ${active ? 'active' : ''}`}>
            {icon}
        </div>
    )
}