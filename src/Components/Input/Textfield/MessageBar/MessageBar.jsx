import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../../../Icons/MessageBar/Picture';
import SendActive from '../../../../Icons/MessageBar/SendActive';
import SendInactive from '../../../../Icons/MessageBar/SendInactive';
import './MessageBar.scss';

MessageBar.propTypes = {
    onSend: PropTypes.func.isRequired,
};

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