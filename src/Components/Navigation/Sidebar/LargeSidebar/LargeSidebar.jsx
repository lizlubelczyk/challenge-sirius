import LargeNavItem from "../../NavItem/LargeNavItem/LargeNavItem";
import Profile from "../../../../Icons/NavItem/Profile";
import Message from "../../../../Icons/NavItem/Message";
import Explore from "../../../../Icons/NavItem/Explore";
import HomeFilled from "../../../../Icons/NavItem/HomeFilled";
import Logo from "../../../Logo/Logo";
import Button from "../../../Input/Button/Button";
import "./LargeSidebar.scss";
export default function LargeSidebar(){
    return (
        <div className="large-sidebar">
            <div className="large-sidebar__logo">
                <Logo />
            </div>
            <div className="large-sidebar-items">
                <LargeNavItem icon={<HomeFilled />} title="Home" active={true}/>
                <LargeNavItem icon={<Explore />} title="Explore" />
                <LargeNavItem icon={<Message />} title="Messages" />
                <LargeNavItem icon={<Profile />} title="Profile" />
            </div>
            <Button className={"button"} size={"medium"} text={"Tweet"} mode={"default"}></Button>
        </div>
    )
}