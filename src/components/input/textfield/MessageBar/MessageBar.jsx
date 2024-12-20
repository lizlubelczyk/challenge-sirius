import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../../icons/messageBar/Picture';
import SendActive from '../../../icons/messageBar/SendActive';
import SendInactive from '../../../icons/messageBar/SendInactive';
import './MessageBar.scss';

export default function MessageBar({ onSend }) {
    const [isActive, setIsActive] = useState(false);

    const handleInputChange = (event) => {
        setIsActive(event.target.value.length > 0);
    };

    return (
        <div className={`message-bar ${isActive ? 'active' : 'inactive'}`}>
            <div className="input-and-picture">
                <Picture />
                <input
                    type="text"
                    placeholder="Type a message..."
                    onChange={handleInputChange}
                />
            </div>
            <div className="send">
                {isActive ? <SendActive onClick={onSend} /> : <SendInactive />}
            </div>
        </div>
    );
}

MessageBar.propTypes = {
    onSend: PropTypes.func.isRequired,
};