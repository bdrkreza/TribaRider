import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ data, origin, destination }) => {
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

                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-md-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center Select-Img">
                                            <img src={data.img} alt="" />
                                            <span classNameName="ml-5 text-danger">{data.vehicle}</span>
                                            <FontAwesomeIcon className="text-warning ml-3" icon={faUsers} size="2x" />
                                        </div>
                                        <div className="media-body text-right">
                                            <h3>${data.driverCharges}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-md-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center Select-Img">
                                            <img src={data.img} alt="" />
                                            <span classNameName="ml-5 text-danger">{data.vehicle}</span>
                                            <FontAwesomeIcon className="text-warning ml-3" icon={faUsers} size="2x" />
                                        </div>
                                        <div className="media-body text-right">
                                            <h3>${data.driverCharges}</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-md-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center Select-Img">
                                            <img src={data.img} alt="" />
                                            <span classNameName="ml-5 text-danger">{data.vehicle}</span>
                                            <FontAwesomeIcon className="text-warning ml-3" icon={faUsers} size="2x" />
                                        </div>
                                        <div className="media-body text-right">
                                            <h3>${data.driverCharges}</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cart;
