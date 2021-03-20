import React, { useContext } from 'react';
import { UserContext } from '../../App';
import google from '../../Image/google-maps.jpg'
import Cart from './Cart';

const DestinationDetails = ({ data }) => {

    const [loggedInUser] = useContext(UserContext);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">dhaka</p>
                                <p class="card-text">To</p>
                                <p class="card-text">Mirpur</p>

                            </div>
                        </div>
                        {
                            loggedInUser.map(user => <Cart data={user}></Cart>)
                        }

                    </div>
                    <div className="col-lg-8">
                        <div className="google">
                            <img src={google} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DestinationDetails;