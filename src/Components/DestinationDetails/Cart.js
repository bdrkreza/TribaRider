import React from 'react';
const Cart = ({ data, origin, destination }) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{origin}</p>
                    <p className="card-text">To</p>
                    <p className="card-text">{destination}</p>

                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="align-self-center">
                                        <img classNameName="w-25" src={data.img} alt="" />
                                        <span classNameName="ml-5 text-danger">{data.vehicle}</span>
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
                <div className="col-xl-12 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="align-self-center">
                                        <img classNameName="w-25" src={data.img} alt="" />
                                        <span classNameName="ml-5 text-danger">{data.vehicle}</span>
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
                <div className="col-xl-12 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="align-self-center">
                                        <img classNameName="w-25" src={data.img} alt="" />
                                        <span classNameName="ml-5 text-danger">{data.vehicle}</span>
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
        </>

    );
};

export default Cart;