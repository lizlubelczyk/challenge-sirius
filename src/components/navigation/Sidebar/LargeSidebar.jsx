import LargeNavItem from "../NavItem/LargeNavItem";
import Profile from "../../icons/navItem/Profile";
import Message from "../../icons/navItem/Message";
import Explore from "../../icons/navItem/Explore";
import HomeFilled from "../../icons/navItem/HomeFilled";
import Logo from "../../icons/logo/Logo";
import Button from "../../input/buttons/Button/Button";
import "./LargeSidebar.scss";
import PropTypes from "prop-types";
import ThemeSwitch from "../../input/buttons/ThemeSwitch/ThemeSwitch";

export default function LargeSidebar({ changeMode, darkMode }) {
    return (
        <div className={`large-sidebar ${darkMode ? 'dark-mode' : ''}`}>
            <div className="large-sidebar-header">
                <div className="large-sidebar__logo">
                    <Logo />
                </div>
                <div className="theme-switch">
                    <ThemeSwitch changeMode={changeMode} darkMode={darkMode} />
                </div>
            </div>
            <div className="large-sidebar-items">
                <LargeNavItem icon={<HomeFilled />} title="Home" active={true} darkMode={darkMode}/>
                <LargeNavItem icon={<Explore />} title="Explore" darkMode={darkMode} />
                <LargeNavItem icon={<Message />} title="Messages" darkMode={darkMode} />
                <LargeNavItem icon={<Profile />} title="Profile"  darkMode={darkMode}/>
            </div>
            <Button className={"button"} size={"medium"} text={"Tweet"} mode={"default"}></Button>
        </div>
    );
}

LargeSidebar.propTypes = {
    changeMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
};