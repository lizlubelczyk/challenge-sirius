import PropTypes from "prop-types";

ButtonTweetMobile.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default function ButtonTweetMobile(onClick) {
    return (
        <div onClick={onClick} >
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="53" height="53" rx="26.5" fill="#4A99E9"/>
                <path
                    d="M24.6224 35.64V29.412H18.3944V25.632H24.6224V19.44H28.4024V25.632H34.5944V29.412H28.4024V35.64H24.6224Z"
                    fill="white"/>
            </svg>
        </div>
    )
}