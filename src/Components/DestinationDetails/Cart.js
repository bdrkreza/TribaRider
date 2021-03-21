import React, { useEffect, useState } from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Rider from './Rider';
const Cart = ({ data, origin, destination }) => {
    const [riderUser, setriderUser] = useState([])
    useEffect(() => {
        setriderUser(data.rider)
    }, [])

    return (
        <>
            <div className="mb-5">
                <div className="card card-icon">
                    <div className="card-body">
                        <h4 className="card-text">
                            <FontAwesomeIcon className="mr-2 text-primary" icon={faMapMarkerAlt} size="1x" />
                            {origin}</h4>
                        <FontAwesomeIcon className="text-warning" icon={faArrowsAltV} size="2x" />
                        <h4 className="card-text">
                            <FontAwesomeIcon className="mr-2 text-primary" icon={faMapMarkerAlt} size="1x" />
                            {destination}</h4>

                    </div>
                </div>

            </div>
            {
                riderUser.map((data) => <Rider data={data} />)
            }
        </>

    );
};

export default Cart;
