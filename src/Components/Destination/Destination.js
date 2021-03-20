import React, { createContext, useContext, useEffect, useState } from 'react';
import './Destination.css';
import google from '../../Image/google-maps.jpg'
import { Link, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData.json'
import { UserContext } from '../../App';


export const PickContext = createContext();
const Destination = () => {
    const { riderSelect } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const Userdata = fakeData?.filter(pd => pd.id === riderSelect);
        // setLoggedInUser(Userdata)
        setLoggedInUser(Userdata)
    }, [])

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const inputEvent = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)

        const value = e.target.value;
        const name = e.target.name;

        setFullName((preValue) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: preValue.lName,
                };

            } else if (name === 'lName') {
                return {
                    fName: preValue.fName,
                    lName: value,
                };

            }

        })

    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h1>Hello {fullName.fName} {fullName.lName} </h1>
                    <div className="col-lg-4">
                        <div className="card card-info-2">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group h5 p-3 mt-2">

                                    <label for="formGroupExampleInput">Pick From</label>
                                    <input onChange={inputEvent}
                                        // value={fullName.fName}
                                        name='fName'
                                        type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your location" />
                                </div>
                                <div class="form-group h5 p-3">
                                    <label for="formGroupExampleInput2">Pick To</label>
                                    <input onChange={inputEvent} type="text"
                                        // value={fullName.lName}
                                        name="lName"
                                        class="form-control" id="formGroupExampleInput2" placeholder="Enter your destination" />
                                </div>
                                <div class="form-group">
                                    <Link to="/destinationDetails" type="button" class="btn btn-outline-warning w-75">Search</Link>
                                </div>
                            </form>

                        </div>
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

export default Destination;