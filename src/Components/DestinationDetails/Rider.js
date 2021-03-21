import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const Rider = ({ data }) => {
    console.log(data)
    return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="align-self-center Select-Img">
                                        <img src={data.img} alt="" />
                                        <span classNameName="ml-5 text-danger">{data.vehicle} </span>
                                        <FontAwesomeIcon className="text-warning ml-3" icon={faUsers} size="2x" />
                                    </div>
                                    <div className="media-body text-right">
                                        <h3>${data.totalAmount}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;
