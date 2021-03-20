import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {

    const { vehicle, img, id } = props.data;
    return (
        <>
            <div className="col-lg-4">
                <div className="container">
                    <div className="card card-info mt-5 text-center">
                        <Link to={`/destination/${id}`}><img src={img} className="card-img-top  mx-auto mt-3" alt="img" /></Link>
                        <div className="card-body">
                            <h4 className="card-title ">{vehicle}</h4>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;