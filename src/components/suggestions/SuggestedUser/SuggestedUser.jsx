import Button from "../../input/buttons/Button/Button";
import "./SuggestedUser.scss";
import PropTypes from "prop-types";

export default function SuggestedUser({ darkMode, user = {} }) {
    return (
        <div className={`user ${darkMode ? 'dark-mode' : ''}`}>
            <div className="profile-picture">
                {user.profilePicture && (
                    <img src={user.profilePicture} alt="Profile" />
                )}
            </div>
            <div className="info">
                <div className="name">{user.firstName} {user.lastName}</div>
                <div className="username">@{user.username}</div>
            </div>
            <div className="follow-button">
                <Button size={"small"} text={"Follow"} mode={darkMode ? "default" : "follow"} />
            </div>
        </div>
    );
}

SuggestedUser.propTypes = {
    darkMode: PropTypes.bool,
    user: PropTypes.shape({
        profilePicture: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        username: PropTypes.string,
    })
}