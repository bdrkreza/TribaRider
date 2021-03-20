import React from 'react';

const Cart = ({ data }) => {
    console.log(data)
    return (
        <>
            <div class="row">
                <div class="col-xl-12 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <img className="w-25" src={data.img} alt="" />
                                        <span className="ml-5 text-danger">{data.vehicle}</span>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>${data.driverCharges}</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <img className="w-25" src={data.img} alt="" />
                                        <span className="ml-5 text-danger">{data.vehicle}</span>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>${data.driverCharges}</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <img className="w-25" src={data.img} alt="" />
                                        <span className="ml-5 text-danger">{data.vehicle}</span>
                                    </div>
                                    <div class="media-body text-right">
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