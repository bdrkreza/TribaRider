import React, { useEffect, useState } from 'react';
import './Destination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData.json'
import Cart from '../DestinationDetails/Cart';
import GoogleDirection from '../DestinationDetails/GoogleDirection';


const Destination = () => {
    const { riderSelect } = useParams();
    const [isActive, setActive] = useState(true);
    const [UserData, setUserData] = useState([]);
    const [Origin, setOrigin] = useState('');
    const [Destination, setDestination] = useState('');

    useEffect(() => {
        const Data = fakeData?.filter(pd => pd.id === riderSelect);
        setUserData(Data)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card des-card bg-info">

                            {isActive ? <form onSubmit={handleSubmit}>
                                <div className="form-group h5 p-3 mt-2 m-4">
                                    <FontAwesomeIcon className="mr-2 text-warning" icon={faMapMarkerAlt} />
                                    <label for="formGroupExampleInput">Pick From</label>
                                    <input onBlur={(e) => setOrigin(e.target.value)} type="text" className="form-control" placeholder="Enter your location" />
                                </div>
                                <div className="form-group h5 p-3 m-4">
                                    <FontAwesomeIcon className="mr-2 text-warning" icon={faMapMarkerAlt} />
                                    <label for="formGroupExampleInput2">Pick To</label>
                                    <input onBlur={(e) => setDestination(e.target.value)} type="text" className="form-control" placeholder="Enter your destination" />
                                </div>
                                <div className="form-group search-btn">
                                    <button onClick={() => setActive(!isActive)} type="button" className="btn btn-outline-warning mx-auto w-50">
                                        <FontAwesomeIcon className="mr-2" icon={faSearchLocation} />
                                        Search</button>
                                </div>
                            </form> :
                                UserData.map(userData => <Cart data={userData} origin={Origin} destination={Destination} />)}

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <GoogleDirection origin={Origin} destination={Destination} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Destination;