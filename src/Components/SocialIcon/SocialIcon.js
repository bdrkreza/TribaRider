import React from 'react';
import './SocialIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
const SocialIcon = ({ GoogleIn, FacebookIn }) => {
    return (
        <>
            <div className="m-2">
                <i><FontAwesomeIcon onClick={GoogleIn} className="mr-2 google" icon={faGooglePlusSquare} size="3x" /></i>
                <i><FontAwesomeIcon onClick={FacebookIn} className="facebook" icon={faFacebookSquare} size="3x" /></i>
            </div>
        </>
    );
};

export default SocialIcon;